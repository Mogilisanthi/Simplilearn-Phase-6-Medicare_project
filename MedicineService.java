package com.simplilearn.demo.medicine;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class MedicineService {
	@Autowired
	private MedicineRepo mrepo;
	
	
	public Medicine addProduct(Medicine m) {
		return mrepo.save(m);
	}
	public List<Medicine> getAllProduct(){
		return mrepo.findAll();
	}
	public Medicine getProductById(int id) {
		if(mrepo.findById(id).isPresent()) {
			return mrepo.findById(id).get();
		}
		else {
			return null;
		}
		
	}
	public Medicine getProductByName(String name) {
		
			return mrepo.findByName(name);
		
		
	}
	public Medicine updateProduct(int id, Medicine newProduct) {
		if(mrepo.findById(id).isPresent()) {
			Medicine oldProduct= mrepo.findById(id).get();
			oldProduct.setName(newProduct.getName());;
			oldProduct.setDescription(newProduct.getDescription());
			oldProduct.setCategory(newProduct.getCategory());
			oldProduct.setPrice(newProduct.getPrice());
			oldProduct.setImageurl(newProduct.getImageurl());
			
			return mrepo.save(oldProduct);
		}
		else {
			return null;
		}
	}
	
	
	public boolean deleteProduct(int id) {
		if(mrepo.findById(id).isPresent()) {
			mrepo.deleteById(id);
			return true;
		}
		
		else {
			return false;
		}
	}
	
}
