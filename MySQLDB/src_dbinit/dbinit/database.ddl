/*

   === CREATE TABLES ===

*/
/*
   -- Drop all Tables
*/
drop table if exists organizations ;
drop table if exists positions ;
drop table if exists branches ;
drop table if exists employees ;

/*
   -- Organization TABLE --
     Make record in each Organization
*/
create table organizations (
  id int not NULL auto_increment PRIMARY KEY,
  org_code varchar(8) default NULL,
  org_name varchar(64) default NULL,
  lock_version int default 0,
  created_at datetime not NULL,
  updated_at datetime not NULL
)ENGINE=InnoDB CHARACTER SET utf8;

/*
    -- Position TABLE --
*/
create table positions (
  id int not NULL auto_increment PRIMARY KEY,
  pos_code varchar(8) default NULL,
  pos_name varchar(64) default NULL,
  lock_version int default 0,
  created_at datetime not NULL,
  updated_at datetime not NULL
)ENGINE=InnoDB CHARACTER SET utf8;

/*
    -- Branch TABLE --
*/
create table branches (
  id int not NULL auto_increment PRIMARY KEY,
  branch_code varchar(8) default NULL,
  branch_name varchar(64) default NULL,
  zip_code varchar(64) default NULL,
  prefecture varchar(128) default NULL,
  city varchar(128) default NULL,
  street varchar(128) default NULL,
  building varchar(128) default NULL,
  main_phone varchar(128) default NULL,
  main_fax varchar(128) default NULL,
  lock_version int default 0,
  created_at datetime not NULL,
  updated_at datetime not NULL
)ENGINE=InnoDB CHARACTER SET utf8;

/*
    -- Employee TABLE --
*/
create table employees (
  id int not NULL auto_increment PRIMARY KEY,
  branch_id int not NULL ,
  organization_id int ,
  position_id  int ,
  first_name varchar(64) default NULL,
  last_name varchar(64) default NULL,
  mobile_number varchar(128) default NULL,
  mail_address varchar(128) default NULL,
  twitter_link varchar(128) default NULL,
  birthday datetime default NULL ,
  entering_company datetime default NULL ,
  english_test int default 0 ,
  lock_version int default 0,
  created_at datetime not NULL,
  updated_at datetime not NULL,
  FOREIGN KEY(branch_id) REFERENCES branches(id),
  FOREIGN KEY(position_id) REFERENCES positions(id),
  FOREIGN KEY(organization_id) REFERENCES organizations(id)
)ENGINE=InnoDB CHARACTER SET utf8;
