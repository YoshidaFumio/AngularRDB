# -*- coding:utf-8 -*-
# encoding: utf-8

# require module


require 'sinatra/base'
require 'active_record'
require 'cgi'
require './app/helpers/model_search'
# *****************************************************************
#  Database Class (ActiveRecord Model)
# *****************************************************************
#
#  Database Open
#
ActiveRecord::Base.establish_connection(
  adapter:  'mysql2',
  host:     ENV['DB_HOSTNAME'],
  username: ENV['DB_USERNAME'],
  password: ENV['DB_PASSWORD'],
  database: ENV['DB_DATABASE']
)
#
#  ActiveRecord Models
#
class Branch < ActiveRecord::Base
  has_many :employees
end
class Organization < ActiveRecord::Base
  has_many :employees
end
class Position < ActiveRecord::Base
  has_many :employees
end
class Employee < ActiveRecord::Base
  belongs_to :branch
  belongs_to :position
  belongs_to :organization
end
#
#  search table
#
#    [ModelName,single,plurial,joinsName]
#
MODEL_TABLE = [
  ['Branch' ,  'branch' , 'branches' , 'branchjoins'],
  ['Organization' ,  'organization' , 'organizations' , 'organizationjoins'],
  ['Position' ,  'position' , 'positions' , 'positionjoins'],
  ['Employee' , 'employee' , 'employees' , 'employeejoins'],
]

# *****************************************************************
#  main Class
# *****************************************************************

class ServerApp < Sinatra::Base
  #
  #  configuration Setup
  #
  configure do
    enable :static
    enable :session
    set :public_folder , File.expand_path('../../../FrontEnd',__FILE__)
    set :views , File.expand_path('../../../FrontEnd',__FILE__)
  end
  #
  #  production mode
  #
  configure :production do
    enable :logging
  end
  #
  #  development mode
  #
  configure :development do
    set :bind, '0.0.0.0'
  end

  # *****************************************************************
  #  Helpers
  # *****************************************************************
  helpers ModelSearch
  # *****************************************************************
  #  Routing
  # *****************************************************************
  #
  #  about
  #
  get '/about' do
    @title = "about this page"
    @content = "this page is ... " + ENV['PROJECTNAME']
    @environment = settings.environment
    @app_file = settings.app_file
    @root = settings.root
    @public =settings.public_folder
    @views =settings.views
    @static =settings.static
    @path_info = request.path_info
    @port = request.port
    @host = request.host
    @user_agent = request.user_agent
    @url = request.url
    @path = request.path
    @ip = request.ip
    @loadpath = $LOAD_PATH
    @project = ENV['PROJECTNAME']
    @imagefile = "DSC_0008.jpg"


    erb :about , :layout => false
  end
  # *****************************************************************
  #  NgRx Test
  # *****************************************************************

  #
  #  Program Load
  #
  get '/domain/sample' do
    erb :index , :layout => false
  end
    # ==  Find record
  #
  #
  # === Parameters
  # * +model+ - Modelclass  (DB table )
  # * 
  # === Return
  # * +status+ - 200 OK,400 Err etc
  # * +body+ - read multiplr records
  # === Example
  #  get https://example.com/api/arreadwrite/finders/?where(~)
  #
  get '/api/arreadwrite/finders/' do
    records = []
    results = []
    result = {'id' =>  1}
    if request.query_string == "" then 
      halt 400,"Query param not found"
    else                  #api/arreadwrite/finders/?where(~)
      query_param = CGI.unescape(request.query_string)
      query_param.gsub!("0x22","0x5c0x22")
      query_param.gsub!("0x27","0x5c0x27")
      if query_param[-1,1] == '='
        query_param.slice!(-1,1)
      end
    end
    evalstr = "records = #{query_param}  "
    # evalstr = evalstr.dump
    if settings.development?
      puts "Finders eval : " + evalstr
    end
    begin
      eval evalstr
      #records = Employee.where(corporation_id: '2')
      if records != [] then
        result['count']= records.length
        result['status'] = true
      else
        result['count']= 0       
        result['status'] = true
      end
    rescue => e
        result['count'] = 0
        result['status'] = false
    end
    results.push(result)
    results.to_json(:route => false)
  end

  # ==  Calculation
  #
  #
  # === Parameters
  # * +model+ - Modelclass  (DB table )
  # * 
  # === Return
  # * +status+ - 200 OK,400 Err etc
  # * +body+ - read multiplr records
  # === Example
  #  get https://example.com/api/arreadwrite/calculations/?Employee.average(:age)
  #
  get '/api/arreadwrite/calculations/' do
    values = 0
    results = []
    result = {'id' =>  1}
    if request.query_string == "" then 
      halt 400,"Query param not found"
    else                  #api/arreadwrite/calculations/?where(~)
      query_param = CGI.unescape(request.query_string)
      query_param.gsub!("0x22","0x5c0x22")
      query_param.gsub!("0x27","0x5c0x27")
      if query_param[-1,1] == '='
        query_param.slice!(-1,1)
      end
    end
    evalstr = "values = #{query_param}  "
    # evalstr = evalstr.dump
    if settings.development?
      puts "Calculations eval : " + evalstr
    end
    begin
      eval evalstr
      #records = Employee.where(corporation_id: '2')
        result['status']= 'success'
        result['value']= values       
    rescue => e
      halt 500,"Error Occured (#{e.message})"
    end
    results.push(result)
    results.to_json(:route => false)
  end
  ##
  # ==  get by key
  #
  #
  # === Parameters
  # * +model+ - Modelclass  (DB table )
  # * +id+ - id number
  # === Return
  # * +status+ - 200 OK,400 Err etc
  # * +body+ - read record
  # === Example
  #  get https://example.com/api/arreadwrite/employee/37
  #
  get '/api/arreadwrite/:model/:id' do
    record = {}

    model=single_search(params[:model])
    if model == ""
      halt 400,"ModelName not found #{params[:model]}"
    end
    if /\d/ ===  params[:id] then
    else
      halt 400,"ID not Natural number"
    end
    #
    # make  evalstring example "record=Employee.find_by(id: 37)"
    #
    evalstr = "record = #{model}.find_by(id: #{params[:id]})"
    if settings.development?
      puts  "Get normal :" + evalstr
    end
    begin
      eval (evalstr)
      if record != nil then
        record.to_json(:root => false)
      else
        halt 400,"Record not found id=#{params[:id]}"
      end
    rescue => e
      halt 500," Error Occured #{e.message}"
    end
  end
  ##
  # ==  get by query or multi table association
  #
  #
  # === Parameters
  # * +model+ - Modelclass  (DB table )
  # * 
  # === Return
  # * +status+ - 200 OK,400 Err etc
  # * +body+ - read multiplr records
  # === Example
  #  get https://example.com/api/arreadwrite/employees/?where(~)
  #
  get '/api/arreadwrite/:model/' do      #getWithQuery
    records = []
    model=plurial_search(params[:model]) #get MODEL Name
    if model != ""                       #Plurial found
      if request.query_string == "" then #api/arreadwrite/models/
        query_param = "all"              #getALL
      else                  #api/arreadwrite/models/?where(~)
        if settings.development?
          puts "Query param : " + request.query_string
        end  
        query_param = CGI.unescape(request.query_string)
        query_param.gsub!("0x22","0x5c0x22")
        query_param.gsub!("0x27","0x5c0x27")
        if query_param[-1,1] == '='
          query_param.slice!(-1,1)
        end
      end
      evalstr = "records = " + model + "." + query_param #Make eval
      if settings.development?
        puts "Query eval : " + evalstr
      end
      begin
        eval evalstr
        #records = Organization.where(corporation_id: '2')
        if records != [] then
          records.to_json(:root => false)
        else
          halt 400,"Record not found id=#{query_param}"
        end
      rescue => e
        halt 500,"Error Occured (#{e.message})"
      end
    else
      model=join_search(params[:model]) #get Model Name
      if model != "" then
        if request.query_string == "" then #No query
          halt 400,"Query param not found"
        else                  #api/arreadwrite/models/?where(~).joins()
          query_param = CGI.unescape(request.query_string)
          query_param.gsub!("0x22","0x5c0x22")
          query_param.gsub!("0x27","0x5c0x27")
          if query_param[-1,1] == '='
            query_param.slice!(-1,1)
          end  
        end
        evalstr = "records = " + model + "." + query_param
        # evalstr = evalstr.dump
        if settings.development?
          puts "Joins eval = " + evalstr
        end
        begin
          eval evalstr
          #records = Employee.joins(emp_details)
          if records == [] then
            halt 400,"Record not found id=#{query_param}"
          end
        rescue => e
          halt 500,"Error Occured (#{e.message})"
        end
        outrecords=[]
        records.each_with_index do |record ,idx|
          recordj = record.to_json
          recordp = JSON.parse(recordj) 
          item = {}
          item['joinid']=idx+1 #id number start from 1 not zero
          item = item.merge(recordp)
          outrecords.push(item)
        end
        outrecords.to_json(:root => false)
      else
        halt 400,"ModelName not found #{params[:model]}"
      end
    end  
  end
  ##
  # ==  Transaction proccess
  #
  #
  # === Parameters
  # * +body+ - transaction status
  # === Return
  # * +status+ - 201 OK,400 Err etc
  # * +body+ - created record
  # === Example
  #  post https://example.com/api/arreadwrite/transaction
  #
  post '/api/arreadwrite/transaction/' do
    content_type :json, :charset => 'utf-8'
    result = []
    request.body.rewind
    bodydata = JSON.parse(request.body.read.to_s)
    evalstr = bodydata['request']
    if settings.development?
      puts "Transaction eval :" + evalstr
    end
    begin
      eval evalstr
      puts "OK"
      retstr= { 'id' => 1,'status' => @retstatus , 'message' => @retmessage}
    rescue => e
      puts  "err"
      retstr= { 'id' => 1,'status' => 'NG' , 'message' => "Error occured #{e.message}"}
    end
    retstr.to_json
  end

  ##
  # ==  Create 1 record
  #
  #
  # === Parameters
  # * +model+ - Modelclass  (DB table )
  # * +body+ - initial data for create
  # === Return
  # * +status+ - 201 OK,400 Err etc
  # * +body+ - created record
  # === Example
  #  post https://example.com/api/arreadwrite/employee
  #
  post '/api/arreadwrite/:model/' do
    record = {}
    model=single_search(params[:model])
    if model == ""
      halt 400,"ModelName not found #{params[:model]}"
    end
    request.body.rewind
    reqdata = JSON.parse(request.body.read.to_s)
    #
    # create 1 record
    # 
    evalstr = "record = #{model}.new"
    if settings.development?
      puts "Create eval : " + evalstr
    end
    begin
      eval evalstr
    rescue => e
      halt 400,"Create Error #{e.message}"
    end
    #
    # get request data from body
    # 
    reqdata.each_key do |key|
      if ['id','created_at','updated_at'].include?(key) then
        next
      end
      if key == "update_flag" then
        record[key]= 'N'
        next
      end
      if key == "lock_version" then
         record[key] = 0 
         break
      end
      record[key]=reqdata[key]
    end
    if record.save then
      status 201
      body record.to_json(:root => false)
    else
      halt 400,"Create error in save mode"
    end
  end
  ##
  # ==  delete 1 record
  #
  #
  # === Parameters
  # * +model+ - Modelclass  (DB table )
  # * +id+ - idnumber  (DB table )
  # === Return
  # * +status+ - 201 OK,400 Err etc
  # * +body+ - created record
  # === Example
  #  delete https://example.com/api/arreadwrite/employee/67
  #
  delete '/api/arreadwrite/:model/:id' do
    model=single_search(params[:model])
    if model == ""
      halt 400,"ModelName not found #{params[:model]}"
    end
    if /\d/ ===  params[:id] then
    else
      halt 400,"ID not Natural number"
    end
    # make  evalstring example "record=Emplyee.destroy(3)"
    evalstr = "record = #{model}.destroy(#{params[:id]})"
    if settings.development?
      puts "Delete eval : " + evalstr
    end
    begin
      eval evalstr
      # retstr= { 'id' => params[:id], 'message' => 'deleted'}
      # retstr.to_json
      retstr = 'Delete success'
    rescue => e
      halt 500," Error Occured #{e.message}"
    end    
  end
  ##
  # ==  Update 1 record
  #
  #
  # === Parameters
  # * +model+ - Modelclass  (DB table )
  # * +body+ - all data for update
  # === Return
  # * +status+ - 201 OK,400 Err etc
  # * +body+ - created record
  # === Example
  #  post https://example.com/api/arreadwrite/employee
  #
  put '/api/arreadwrite/:model/:id' do
    record = Hash.new
    model=single_search(params[:model])
    if model == ""
      halt 400,"ModelName not found #{params[:model]}"
    end
    if /\d/ ===  params[:id] then
    else
      halt 400,"ID not Natural number"
    end
    request.body.rewind
    reqdata = JSON.parse(request.body.read.to_s)
    #
    # get request record
    # 
    # make  evalstring example "record = Emplyee.find_by(id: 3)"
    evalstr = "record = #{model}.find_by(id: #{params[:id]})"
    if settings.development?
      puts "Update eval : " + evalstr
    end
    begin
      eval evalstr
      if record == nil then
        halt 400,"Record not found id=#{params[:id]}"
      end
    rescue => e
      halt 500," Error Occured #{e.class}"
    end
    if settings.development?
      puts 'Update reqdata : ' + reqdata.to_json
      puts 'Update  before record : '+ record.to_json
    end
    #
    # check optimistic lock
    # 
    if record['lock_version'] > reqdata['lock_version'] then
        halt 400,"Data is already updated by another user"
    #
    # Update Record field  from request data except id ,datetime
    # 
    else
      reqdata.each_key do |key|
        if  ['id','created_at','updated_at'].include?(key)  then
          next
        end
        if key == "lock_version" then
          break
        end
        record[key]=reqdata[key]
      end
    end
    if settings.development?
      puts 'Update  after record : '+ record.to_json
    end
    if record.save then
      record.to_json(:root => false)
    else
      halt 400,"UPDATE error in save mode"
    end
  end
#
#  Angular load
#
  get '/*' do
    #  erb :index , :layout => false
      send_file File.join(settings.public_folder,'index.html')
  end
  #
  # Not Found
  #
  not_found do
    "Routing ERROR Request = #{request.url}"
  end

  run! if app_file == $0
end
