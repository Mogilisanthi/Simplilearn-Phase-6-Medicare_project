package com.simplilearn.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.demo.entity.Admin;
import com.simplilearn.demo.repo.AdminRepo;
@Service
public class AdminService {
	@Autowired
	private AdminRepo ad_repo;
	
	public Admin addAdmin(Admin ad) {
		return ad_repo.save(ad);
	}
	public List<Admin> getAllAdmin(){
		return ad_repo.findAll();
	}
	public Admin getAdminById(int id) {
		if(ad_repo.findById(id).isPresent()) {
			return ad_repo.findById(id).get();
		}
		else {
			return null;
		}
		
	}
	public Admin updateAdmin(int id, Admin newAdmin) {
		if(ad_repo.findById(id).isPresent()) {
			Admin oldAdmin= ad_repo.findById(id).get();
			oldAdmin.setAd_name(newAdmin.getAd_name());
			oldAdmin.setAd_email(newAdmin.getAd_email());
			oldAdmin.setAd_login(newAdmin.getAd_login());
			oldAdmin.setAd_password(newAdmin.getAd_password());			
			return ad_repo.save(oldAdmin);
		}
		else {
			return null;
		}
	}
	
	
	public boolean deleteAdmin(int id) {
		if(ad_repo.findById(id).isPresent()) {
			ad_repo.deleteById(id);
			return true;
		}
		
		else {
			return false;
		}
	}
	
	



}
