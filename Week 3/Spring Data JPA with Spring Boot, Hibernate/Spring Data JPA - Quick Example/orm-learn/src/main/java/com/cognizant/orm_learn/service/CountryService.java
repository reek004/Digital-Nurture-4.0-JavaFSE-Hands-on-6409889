package com.cognizant.ormlearn.service;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.repository.CountryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {

    private final CountryRepository countryRepository;

    public CountryService(CountryRepository repo) {
        this.countryRepository = repo;
    }

    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }
}
