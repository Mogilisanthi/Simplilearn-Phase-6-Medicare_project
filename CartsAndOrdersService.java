package com.simplilearn.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.demo.entity.CartsAndOrders;
import com.simplilearn.demo.repo.CartsandOrdersRepo;

@Service
public class CartsAndOrdersService {
	@Autowired
	CartsandOrdersRepo cartrepo;
	
	//cart
	
	public CartsAndOrders insert(CartsAndOrders c) {
		return cartrepo.save(c);
		
	}
	
	public List<CartsAndOrders> getcart() {
		return cartrepo.findAll();
	}


	
	public boolean deleteById(long id) {
		if (cartrepo.findById(id).isPresent()) {
			cartrepo.deleteById(id);
			return true;
		}
		return false;
	}
	
	
	
	//orders

	
	public CartsAndOrders updateCartByUsername( Long id,CartsAndOrders newData) {
		if (cartrepo.findById(id).isPresent()) {
			CartsAndOrders oldData = cartrepo.findById(id).get();
			oldData.setDateofpurchase(newData.getDateofpurchase());
			oldData.setOrderno(newData.getOrderno());
			oldData.setPayment(newData.getPayment());
			oldData.setUsername(newData.getUsername());
			oldData.setMname(newData.getMname());
			oldData.setMcategory(newData.getMcategory());
			oldData.setMdescription(newData.getMdescription());
			oldData.setImageurl(newData.getImageurl());
			oldData.setMprice(newData.getMprice());
			return cartrepo.save(oldData);
		} else
			return null;
	}
	
	public CartsAndOrders updateCartqty( Long id,CartsAndOrders newData) {
		if (cartrepo.findById(id).isPresent()) {
			CartsAndOrders oldData = cartrepo.findById(id).get();
			oldData.setQty(newData.getQty());
			oldData.setTotalprice(newData.getTotalprice());
			return cartrepo.save(oldData);
		} else
			return null;
	}
	
	
	
	
}


