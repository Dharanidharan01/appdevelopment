package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.SignUp;
import com.example.demo.Service.SignUpService;
@RestController
@RequestMapping("/login")
@CrossOrigin
public class LoginController {
	@Autowired 
	SignUpService ser;
	@GetMapping("/get")
	private Iterable<SignUp> GetUsers(){
		return ser.GetAll();
	}
	@GetMapping("/getbyid/{username}")
	SignUp getById(@PathVariable("username")String username){
		return ser.getByUserName(username);
	}
	@PutMapping("/update")
	public SignUp update(@RequestBody SignUp user)
	{
		return ser.save(user);
	}
	@DeleteMapping("/delete/{id}")
	public String delete(@PathVariable("id")int id)
	{
		return ser.delete(id);
	}
}
