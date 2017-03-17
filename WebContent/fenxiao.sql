/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50621
Source Host           : 127.0.0.1:3306
Source Database       : fenxiao

Target Server Type    : MYSQL
Target Server Version : 50621
File Encoding         : 65001

Date: 2015-09-15 13:44:33
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createDate` datetime DEFAULT NULL,
  `deleted` bit(1) NOT NULL,
  `version` int(11) NOT NULL,
  `juri` int(11) NOT NULL DEFAULT '0',
  `lastLoginIp` varchar(255) DEFAULT NULL,
  `lastLoginTime` datetime DEFAULT NULL,
  `loginCount` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('1', '2014-10-25 20:28:38', '\0', '152', '1', '127.0.0.1', '2015-07-29 17:20:19', '136', 'admin', '21232f297a57a5a743894a0e4a801fc3', '1');

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createDate` datetime DEFAULT NULL,
  `deleted` bit(1) NOT NULL,
  `version` int(11) NOT NULL,
  `content` text,
  `status` int(11) NOT NULL DEFAULT '0',
  `summary` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `views` int(11) DEFAULT NULL,
  `article_cate` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKD458CCF6D5046BB1` (`article_cate`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


-- ----------------------------
-- Table structure for article_cate
-- ----------------------------
DROP TABLE IF EXISTS `article_cate`;
CREATE TABLE `article_cate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createDate` datetime DEFAULT NULL,
  `deleted` bit(1) NOT NULL,
  `version` int(11) NOT NULL,
  `fatherId` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for commission
-- ----------------------------
DROP TABLE IF EXISTS `commission`;
CREATE TABLE `commission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createDate` datetime DEFAULT NULL,
  `deleted` bit(1) NOT NULL,
  `version` int(11) NOT NULL,
  `lowerLevelNo` varchar(255) DEFAULT NULL,
  `money` double DEFAULT NULL,
  `no` varchar(255) DEFAULT NULL,
  `operator` varchar(255) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `user` int(11) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK3CB17CEB3519E4C2` (`user`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for config
-- ----------------------------
DROP TABLE IF EXISTS `config`;
CREATE TABLE `config` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createDate` datetime DEFAULT NULL,
  `deleted` bit(1) NOT NULL,
  `version` int(11) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `enAddress` varchar(255) DEFAULT NULL,
  `hrEmail` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `qq` varchar(255) DEFAULT NULL,
  `sendEmail` varchar(255) DEFAULT NULL,
  `sendEmailPass` varchar(255) DEFAULT NULL,
  `sendEmailSmtp` varchar(255) DEFAULT NULL,
  `siteDescription` varchar(255) DEFAULT NULL,
  `siteEnDescription` varchar(255) DEFAULT NULL,
  `siteEnKeys` varchar(255) DEFAULT NULL,
  `siteEnName` varchar(255) DEFAULT NULL,
  `siteKeys` varchar(255) DEFAULT NULL,
  `siteName` varchar(255) DEFAULT NULL,
  `siteUrl` varchar(255) DEFAULT NULL,
  `weibo` varchar(255) DEFAULT NULL,
  `weixin` varchar(255) DEFAULT NULL,
  `zixunEmail` varchar(255) DEFAULT NULL,
  `firstLevel` double DEFAULT NULL,
  `secondLevel` double DEFAULT NULL,
  `thirdLevel` double DEFAULT NULL,
  `downloadUrl` varchar(255) DEFAULT NULL,
  `alipayKey` varchar(255) DEFAULT NULL,
  `alipayPartner` varchar(255) DEFAULT NULL,
  `alipaySellerEmail` varchar(255) DEFAULT NULL,
  `onlinePayIsOpen` int(11) DEFAULT NULL,
  `rechargeCardIsOpen` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of config
-- ----------------------------
INSERT INTO `config` VALUES ('1', '2015-06-14 20:42:42', '\0', '12', '0', null, '0', '0', 'upload/20150626/fea511e1-26f6-4410-8f2f-4754a8e408b8.png', '0', '0', null, null, null, '0', '0', '0', '0', '0', '微商城', '0', null, 'upload/20150626/768bcbc7-ebf2-4bb8-a213-7b64bb490949.png', '0', '0.15', '0.1', '0.05', 'https://www.dnspod.cn/Domain', '72e2043ee4e74164b66f8fb9d1545248', '285684519923417943', 'ishangluo1@qq.com', '1', '1');

-- ----------------------------
-- Table structure for financial
-- ----------------------------
DROP TABLE IF EXISTS `financial`;
CREATE TABLE `financial` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createDate` datetime DEFAULT NULL,
  `deleted` bit(1) NOT NULL,
  `version` int(11) NOT NULL,
  `balance` double DEFAULT NULL,
  `money` double DEFAULT NULL,
  `no` varchar(255) DEFAULT NULL,
  `operator` varchar(255) DEFAULT NULL,
  `payment` varchar(255) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `user` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK154FDC893519E4C2` (`user`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for kami
-- ----------------------------
DROP TABLE IF EXISTS `kami`;
CREATE TABLE `kami` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createDate` datetime DEFAULT NULL,
  `deleted` bit(1) NOT NULL,
  `version` int(11) NOT NULL,
  `no` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `saleTime` datetime DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `product` int(11) DEFAULT NULL,
  `ordersNo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK321D725CEC6D32` (`product`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for message
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createDate` datetime DEFAULT NULL,
  `deleted` bit(1) NOT NULL,
  `version` int(11) NOT NULL,
  `content` varchar(255) DEFAULT NULL,
  `reply` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of message
-- ----------------------------

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createDate` datetime DEFAULT NULL,
  `deleted` bit(1) NOT NULL,
  `version` int(11) NOT NULL,
  `money` double DEFAULT NULL,
  `no` varchar(255) DEFAULT NULL,
  `productId` varchar(255) DEFAULT NULL,
  `productName` varchar(255) DEFAULT NULL,
  `productNum` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `summary` varchar(255) DEFAULT NULL,
  `user` int(11) DEFAULT NULL,
  `productMoney` double DEFAULT NULL,
  `payDate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKC3DF62E53519E4C2` (`user`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
 
-- ----------------------------
-- Table structure for phone_validate_code
-- ----------------------------
DROP TABLE IF EXISTS `phone_validate_code`;
CREATE TABLE `phone_validate_code` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createDate` datetime DEFAULT NULL,
  `deleted` bit(1) NOT NULL,
  `version` int(11) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createDate` datetime DEFAULT NULL,
  `deleted` bit(1) NOT NULL,
  `version` int(11) NOT NULL,
  `content` text,
  `picture` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `product_cate` int(11) DEFAULT NULL,
  `bills` double DEFAULT NULL,
  `money` double DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKED8DCCEF9F4FDAD1` (`product_cate`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for product_cate
-- ----------------------------
DROP TABLE IF EXISTS `product_cate`;
CREATE TABLE `product_cate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createDate` datetime DEFAULT NULL,
  `deleted` bit(1) NOT NULL,
  `version` int(11) NOT NULL,
  `fatherId` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for recharge
-- ----------------------------
DROP TABLE IF EXISTS `recharge`;
CREATE TABLE `recharge` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createDate` datetime DEFAULT NULL,
  `deleted` bit(1) NOT NULL,
  `version` int(11) NOT NULL,
  `money` double DEFAULT NULL,
  `no` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `user` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKCFF27EA73519E4C2` (`user`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


-- ----------------------------
-- Table structure for recharge_card
-- ----------------------------
DROP TABLE IF EXISTS `recharge_card`;
CREATE TABLE `recharge_card` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createDate` datetime DEFAULT NULL,
  `deleted` bit(1) NOT NULL,
  `version` int(11) NOT NULL,
  `money` double NOT NULL,
  `no` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `useTime` varchar(255) DEFAULT NULL,
  `useUserNo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


-- ----------------------------
-- Table structure for test_c3p0
-- ----------------------------
DROP TABLE IF EXISTS `test_c3p0`;
CREATE TABLE `test_c3p0` (
  `a` char(1) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of test_c3p0
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createDate` datetime DEFAULT NULL,
  `deleted` bit(1) NOT NULL,
  `version` int(11) NOT NULL,
  `balance` double(11,2) DEFAULT '0.00',
  `commission` double(11,2) DEFAULT '0.00',
  `lastLoginIp` varchar(255) DEFAULT NULL,
  `lastLoginTime` datetime DEFAULT NULL,
  `loginCount` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `registerIp` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `superior` varchar(255) DEFAULT NULL,
  `no` varchar(255) DEFAULT NULL,
  `statusDate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

INSERT INTO `user` (`id`, `createDate`, `deleted`, `version`, `balance`, `commission`, `lastLoginIp`, `lastLoginTime`, `loginCount`, `name`, `password`, `phone`, `registerIp`, `status`, `superior`, `no`, `statusDate`) VALUES ('1', '2015-06-16 22:32:59', '\0', '109', '1531.00', '110.50', '127.0.0.1', '2015-07-02 21:19:47', '69', 'admin', 'b0baee9d279d34fa1dfd71aadb908c3f', '18705080055', '192.168.0.100', '1', NULL, '100000', NULL);

-- ----------------------------
-- Table structure for withdraw
-- ----------------------------
DROP TABLE IF EXISTS `withdraw`;
CREATE TABLE `withdraw` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createDate` datetime DEFAULT NULL,
  `deleted` bit(1) NOT NULL,
  `version` int(11) NOT NULL,
  `bank` varchar(255) DEFAULT NULL,
  `bankAddress` varchar(255) DEFAULT NULL,
  `bankName` varchar(255) DEFAULT NULL,
  `bankNo` varchar(255) DEFAULT NULL,
  `money` double DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `user` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKC7F50B0A3519E4C2` (`user`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
