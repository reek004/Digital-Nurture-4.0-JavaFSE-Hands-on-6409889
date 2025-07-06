package com.cognizant.ormlearn.repository;

import com.cognizant.ormlearn.model.Country;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Arrays;

@Repository
public class CountryRepository {

    // fake method to simulate findAll()
    public List<Country> findAll() {
        Country india = new Country();
        india.setCode("IN");
        india.setName("India");

        Country usa = new Country();
        usa.setCode("US");
        usa.setName("United States of America");

        return Arrays.asList(india, usa);
    }
}
