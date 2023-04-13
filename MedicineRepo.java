package com.simplilearn.demo.medicine;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;



import org.springframework.data.jpa.repository.config.JpaRepositoryConfigExtension;


@Repository
public interface MedicineRepo extends JpaRepository<Medicine,Integer>{

	
	
	public Medicine findByName(String name);

}
