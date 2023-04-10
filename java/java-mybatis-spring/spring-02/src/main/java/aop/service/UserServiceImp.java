package aop.service;

import org.springframework.stereotype.Component;

@Component
public class UserServiceImp implements UserService{
    @Override
    public void add() {
        System.out.println("add");
    }
}
