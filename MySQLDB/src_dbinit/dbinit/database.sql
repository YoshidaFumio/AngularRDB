/* ================================================ */
/*                Branch                            */
/* ================================================ */

insert into branches (branch_code,branch_name,zip_code,prefecture,city,street,main_phone,created_at,updated_at)  
   values ('100','東京本社','107-0061','東京都','港区','北青山2−12−28','03-1111-2222',now(),now());
insert into branches (branch_code,branch_name,zip_code,prefecture,city,street,main_phone,created_at,updated_at)  
   values ('200','横浜支店','231-0021','神奈川県','横浜市','中区日本大通34','045-333-4444',now(),now());
insert into branches (branch_code,branch_name,zip_code,prefecture,city,street,main_phone,created_at,updated_at)  
   values ('300','千葉支店','261-0004','千葉県','千葉市','美浜区美浜11','043-555-6666',now(),now());
insert into branches (branch_code,branch_name,zip_code,prefecture,city,street,main_phone,created_at,updated_at)  
   values ('400','埼玉営業所','330-0071','埼玉県','さいたま市','浦和区上木崎2−4','048-777-8888',now(),now());


/* ================================================ */
/*                Position                          */
/* ================================================ */
insert into positions (pos_code,pos_name,created_at,updated_at) values ('10','社長',now(),now());
insert into positions (pos_code,pos_name,created_at,updated_at) values ('20','専務',now(),now());
insert into positions (pos_code,pos_name,created_at,updated_at) values ('30','常務',now(),now());
insert into positions (pos_code,pos_name,created_at,updated_at) values ('40','部長',now(),now());
insert into positions (pos_code,pos_name,created_at,updated_at) values ('50','課長',now(),now());
insert into positions (pos_code,pos_name,created_at,updated_at) values ('60','係長',now(),now());
insert into positions (pos_code,pos_name,created_at,updated_at) values ('70','主任',now(),now());
insert into positions (pos_code,pos_name,created_at,updated_at) values ('80','一般',now(),now());
insert into positions (pos_code,pos_name,created_at,updated_at) values ('90','嘱託',now(),now());

/* ================================================ */
/*                Organization                      */
/* ================================================ */
insert into organizations (org_code,org_name,created_at,updated_at) values ('100','役員室',now(),now());
insert into organizations (org_code,org_name,created_at,updated_at) values ('200','営業部',now(),now());
insert into organizations (org_code,org_name,created_at,updated_at) values ('300','総務部',now(),now());
insert into organizations (org_code,org_name,created_at,updated_at) values ('400','購買部',now(),now());
/* ================================================ */
/*                Employee                          */
/* ================================================ */

insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (2,2,4,'青山','道雄','080-8888-9901','michio.aoyama@tamanegidesign.co.jp','1969/12/17','2002/11/01',820,now(),now());
insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (2,2,8,'東','克樹','080-8888-9902','katsuki.azuma@tamanegidesign.co.jp','1995/11/29','2018/04/01',670,now(),now());
insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (2,2,8,'斎藤','俊介','080-8888-9903','shunsuke.saitou@tamanegidesign.co.jp','1994/1/7','2017/04/01',740,now(),now());
insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (2,2,6,'平田','慎吾','080-8888-9904','shingo.hirata@tamanegidesign.co.jp','1989/8/29','2011/04/01',520,now(),now());
insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (2,2,5,'西森','将司','080-8888-9905','masashi.nishimori@tamanegidesign.co.jp','1977/1/14','2008/9/1',660,now(),now());
insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (2,2,7,'石川','雄洋','080-8888-9906','takehiro.ishikawa@tamanegidesign.co.jp','1986/7/10','2002/10/01',480,now(),now());
insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (2,2,7,'桑原','将司','080-8888-9907','masashi.kuwahara@tamanegidesign.co.jp','1993/7/27','2016/4/01',560,now(),now());
insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (2,3,8,'楠本','泰子','080-8888-9908','yasuko.kusumoto@tamanegidesign.co.jp','1995/7/7','2017/10/01',390,now(),now());
insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (3,2,4,'川越','秀隆','080-8888-9811','hidetaka.kawagoe@tamanegidesign.co.jp','1973/6/8','2003/12/01',720,now(),now());
insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (3,2,5,'金澤','岳','080-8888-9812','takeshi.kanazawa@tamanegidesign.co.jp','1984/5/5','2002/7/01',540,now(),now());
insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (3,2,6,'田中','靖洋','080-8888-9813','yasuhiro.tanaka@tamanegidesign.co.jp','1987/6/21','2010/04/01',460,now(),now());
insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (3,2,7,'高濱','卓也','080-8888-9814','hidetaka.kawagoe@tamanegidesign.co.jp','1989/7/6','2013/4/01',660,now(),now());
insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (3,2,7,'佐々木','千隼','080-8888-9815','chihaya.sasaki@tamanegidesign.co.jp','1973/6/8','2018/10/01',530,now(),now());
insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (3,2,7,'大木','貴昌','080-8888-9816','takamasa.ooki@tamanegidesign.co.jp','1991/11/22','2014/4/01',510,now(),now());
insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (3,3,8,'三木','亮子','080-8888-9817','ryouko.miki@tamanegidesign.co.jp','1991/10/25','2015/10/01',620,now(),now());
insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (4,2,5,'阿部','真弘','080-8888-9831','masahiro.abe@tamanegidesign.co.jp','1978/5/12','2006/7/01',610,now(),now());
insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (4,2,6,'大石','達也','080-8888-9832','tatsuya.ooishi@tamanegidesign.co.jp','1988/10/10','2013/4/1',710,now(),now());
insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (4,2,6,'高木','勇人','080-8888-9833','yuuto.takagi@tamanegidesign.co.jp','1989/7/13','2013/7/01',560,now(),now());
insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (4,2,8,'永江','恭平','080-8888-9834','kyouhei.nagae@tamanegidesign.co.jp','1993/5/7','2016/7/01',410,now(),now());
insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (4,3,8,'熊代','聖子','080-8888-9835','seiko.kumashiro@tamanegidesign.co.jp','1989/4/8','2015/7/01',330,now(),now());
insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (1,1,1,'宮出','隆自','080-8888-9851','ryuuji.miyaide@tamanegidesign.co.jp','1977/8/12','2001/11/15',710,now(),now());
insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (1,1,2,'石井','寿史','080-8888-9852','hisashi.ishii@tamanegidesign.co.jp','1977/9/14','2001/11/15',670,now(),now());
insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (1,1,3,'河田','雄介','080-8888-9853','yuusuke.kawada@tamanegidesign.co.jp','1974/12/12','2001/11/15',550,now(),now());
insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (1,4,4,'福地','寿樹','080-8888-9854','kazuki.fukuti@tamanegidesign.co.jp','1975/12/27','2006/7/01',710,now(),now());
insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (1,4,5,'石川','雅紀','080-8888-9855','masaki.ishikawa@tamanegidesign.co.jp','1980/1/22','2007/7/01',620,now(),now());
insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (1,4,6,'小川','泰弘','080-8888-9856','yasuhiro.ogawa@tamanegidesign.co.jp','1990/5/16','2013/4/01',710,now(),now());
insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (1,4,7,'藤本','治孝','080-8888-9857','harutaka.fujimot@tamanegidesign.co.jp','1995/5/16','2018/4/01',710,now(),now());
insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (1,2,4,'杉村','茂','080-8888-9861','shigeru.sugimura@tamanegidesign.co.jp','1979/6/26','2005/7/01',740,now(),now());
insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (1,2,5,'坂口','知孝','080-8888-9862','tomotaka.sakaguti@tamanegidesign.co.jp','1984/7/7','2010/6/01',670,now(),now());
insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (1,2,5,'中山','翔太','080-8888-9863','shouta.nakayama@tamanegidesign.co.jp','1986/9/22','2010/4/01',610,now(),now());
insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (1,2,6,'荒木','貴弘','080-8888-9864','takahiro.araki@tamanegidesign.co.jp','1987/7/26','2010/4/01',740,now(),now());
insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (1,2,6,'山崎','孝太郎','080-8888-9865','koutarou.yamazaki@tamanegidesign.co.jp','1983/8/11','2010/4/01',600,now(),now());
insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (1,2,7,'西浦','直道','080-8888-9866','naomichiu.nishimura@tamanegidesign.co.jp','1991/4/11','2014/4/01',540,now(),now());
insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (1,2,7,'松本','友','080-8888-9867','yuu.matsumoto@tamanegidesign.co.jp','1995/2/5','2010/4/01',440,now(),now());
insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (1,2,8,'吉田','大成','080-8888-9868','taisei.yoshida@tamanegidesign.co.jp','1995/3/7','2017/4/01',660,now(),now());
insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (1,3,4,'土橋','勝征','080-8888-9871','katsumasa.dobashi@tamanegidesign.co.jp','1968/12/5','2004/6/24',560,now(),now());
insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (1,3,5,'衣川','篤史','080-8888-9872','atsushi.kinugawa@tamanegidesign.co.jp','1981/3/20','2010/4/1',600,now(),now());
insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (1,3,6,'松岡','健一','080-8888-9873','kenichi.matsuoka@tamanegidesign.co.jp','1982/6/7','2012/5/10',520,now(),now());
insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (1,3,7,'上田','荵','080-8888-9874','shinobu.ueda@tamanegidesign.co.jp','1988/10/2','2013/9/2',360,now(),now());
insert into employees (branch_id,organization_id,position_id,last_name,first_name,mobile_number,mail_address,birthday,entering_company,english_test,created_at,updated_at)  
   values (1,3,8,'宮本','彩子','080-8888-9875','ayako.miyamoto@tamanegidesign.co.jp','1995/4/3','2018/4/1',420,now(),now());


