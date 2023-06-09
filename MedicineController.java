package com.simplilearn.demo.medicine;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;





@CrossOrigin("http://localhost:4200/")  
@RestController
@RequestMapping("/api/medicine")
public class MedicineController {
	@Autowired
	private MedicineService mservice;
	
	@PostMapping("/")
	public ResponseEntity<Medicine> addProduct(@RequestBody Medicine m){
		
		Medicine product= mservice.addProduct(m);
		
		if(product!=null)
			return new ResponseEntity<Medicine>(product,HttpStatus.CREATED);
		else
			return new ResponseEntity<Medicine>(product,HttpStatus.INTERNAL_SERVER_ERROR);
		
	}
	@GetMapping("/")
	public List<Medicine> getAllProduct(){
		return mservice.getAllProduct();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Medicine>getProductById (@PathVariable int id){
		Medicine product= mservice.getProductById(id);
		
		if(product!=null)
			return new ResponseEntity<Medicine>(product, HttpStatus.OK);
		else
			return new ResponseEntity<Medicine>(product, HttpStatus.NOT_FOUND);
	}
	@GetMapping("/name/{name}")
	public Medicine getProductByName (@PathVariable String name){
		return mservice.getProductByName(name);
		
		
	}
	@PutMapping("/{id}")
	public ResponseEntity<Object> updateProduct(@PathVariable int id,@RequestBody Medicine newMedicine){
		Medicine product= mservice.updateProduct(id, newMedicine);
		
		if (product!=null)
			return new ResponseEntity<Object>(product,HttpStatus.OK);
		else
			return new ResponseEntity<Object>("No Medicine Available to Update",HttpStatus.NOT_FOUND);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String>deleteProduct(@PathVariable int id){
		boolean result = mservice.deleteProduct(id);
		if(result) 
			return new ResponseEntity<String>("Object Deleted",HttpStatus.OK);
		else
			return new ResponseEntity<String>("NO Medicine Found", HttpStatus.NOT_FOUND);
		
	}
	
	
	
	@PostMapping(value="/upload", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<Object> uploadFiles(@RequestPart Medicine medi,@RequestParam("files") MultipartFile[] files) {
		
        try {
            createDirIfNotExist();

            List<String> fileNames = new ArrayList<>();

            // read and write the file to the local folder
            Arrays.asList(files).stream().forEach(file -> {
                byte[] bytes = new byte[0];
                try {
                    bytes = file.getBytes();
                    Path path=Paths.get(FileUtil.folderPath + file.getOriginalFilename());
                    Files.write(path, bytes);
                    fileNames.add(path.toString());
                } catch (IOException e) {
                	e.printStackTrace();
                }
            });
            medi.setImageurl(fileNames.get(0));
            mservice.addProduct(medi);
            return ResponseEntity.status(HttpStatus.OK).body("Files uploaded successfully: " + fileNames);

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("Exception to upload files!");
        }
    }

    /**
     * Create directory to save files, if not exist
     */
    private void createDirIfNotExist() {
        //create directory to save the files
        File directory = new File(FileUtil.folderPath);
        if (! directory.exists()){
            directory.mkdir();
        }
    }
    /**
     * Method to get the list of files from the file storage folder.
     * @return file
     */
    @GetMapping("/files")
    public ResponseEntity<String[]> getListFiles() {
        return ResponseEntity.status(HttpStatus.OK)
                .body( new File(FileUtil.folderPath).list());
    }
	 
}



