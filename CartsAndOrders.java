package com.simplilearn.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class CartsAndOrders {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long cartid;
	private String username;
	private Long id;
	private String mname;
	private String mcategory;
	private String mdescription;
	private String mprice;
	private String imageurl;
	private String qty;
	private String totalprice;
	private String orderno;
	private String dateofpurchase;
	private String payment;
	public long getCartid() {
		return cartid;
	}
	public void setCartid(long cartid) {
		this.cartid = cartid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public Long getMid() {
		return id;
	}
	public void setMid(Long mid) {
		this.id = mid;
	}
	public String getMname() {
		return mname;
	}
	public void setMname(String mname) {
		this.mname = mname;
	}
	public String getMcategory() {
		return mcategory;
	}
	public void setMcategory(String mcategory) {
		this.mcategory = mcategory;
	}
	public String getMdescription() {
		return mdescription;
	}
	public void setMdescription(String mdescription) {
		this.mdescription = mdescription;
	}
	public String getMprice() {
		return mprice;
	}
	public void setMprice(String mprice) {
		this.mprice = mprice;
	}
	public String getImageurl() {
		return imageurl;
	}
	public void setImageurl(String imageurl) {
		this.imageurl = imageurl;
	}
	public String getQty() {
		return qty;
	}
	public void setQty(String qty) {
		this.qty = qty;
	}
	public String getTotalprice() {
		return totalprice;
	}
	public void setTotalprice(String totalprice) {
		this.totalprice = totalprice;
	}
	public String getOrderno() {
		return orderno;
	}
	public void setOrderno(String orderno) {
		this.orderno = orderno;
	}
	public String getDateofpurchase() {
		return dateofpurchase;
	}
	public void setDateofpurchase(String dateofpurchase) {
		this.dateofpurchase = dateofpurchase;
	}
	public String getPayment() {
		return payment;
	}
	public void setPayment(String payment) {
		this.payment = payment;
	}
	



}
