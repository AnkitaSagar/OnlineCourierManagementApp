package com.cg.ocma.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cg.ocma.entities.CourierEntity;

@Repository
public interface CourierRepo extends JpaRepository <CourierEntity,Integer>{
	
	public CourierEntity findByConsignmentNo(int consignmentno);
	public boolean existsByConsignmentNo(int consignmentno);
	
	@Query(value = "SELECT * FROM courier WHERE customerid = :customerid", nativeQuery = true)
	public List<CourierEntity> findAllByCustomerid(@Param("customerid") int customerid);


}
