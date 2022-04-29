package com.cc.phone_store.repository;

import com.cc.phone_store.entity.OrderMaster;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderMasterRepo extends JpaRepository<OrderMaster,String> {
}
