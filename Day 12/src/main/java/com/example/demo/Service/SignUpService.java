package com.example.demo.Service;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.Entity.SignUp;
import com.example.demo.Repository.SignUpRepo;
@Service
public class SignUpService {
	@Autowired 
	SignUpRepo repo;
//	public Iterable<SignUp> GetUserPassService(String username){
//		return repo.findAllUsernamePassword(username);
//	}
	public Iterable<SignUp> GetAll(){
		return repo.findAll();
	}
	public SignUp getByUserName(String username)
	{
		return repo.findByUsername(username);
	}
	public SignUp save(SignUp user)
	{
		repo.save(user);
		return user;
	}
	public String delete(int id) {
		repo.deleteById(id);
		return "Success";
	}
}
