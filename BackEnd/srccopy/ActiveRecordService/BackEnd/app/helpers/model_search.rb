# -*- coding:utf-8 -*-
# encoding: utf-8

# *****************************************************************
#  Model Search Helpers
# *****************************************************************
module ModelSearch
  module_function
#
#  Single Search
#
  def single_search(reqstring)
    model_name = ""
    MODEL_TABLE.each do |tableitem|
      if tableitem[1] == reqstring then
        model_name = tableitem[0]
        break
      end
    end
    return model_name
  end
#
#  Plurial Search
#
  def plurial_search(reqstring)
    model_name = ""
    MODEL_TABLE.each do |tableitem|
      if tableitem[2] == reqstring then
        model_name = tableitem[0]
        break
      end
    end
    return model_name
  end
#
#  join Search
#
def join_search(reqstring)
  model_name = ""
  MODEL_TABLE.each do |tableitem|
    if tableitem[3] == reqstring then
      model_name = tableitem[0]
      break
    end
  end
  return model_name
end
end
