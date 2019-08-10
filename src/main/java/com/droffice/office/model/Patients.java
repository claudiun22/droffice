package com.droffice.office.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Patients {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	Long id;
	String nume;
	String prenume;
	String data_nastere;
	String adresa;
	String istoric;
	Long drid;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNume() {
		return nume;
	}
	public void setNume(String nume) {
		this.nume = nume;
	}
	public String getPrenume() {
		return prenume;
	}
	public void setPrenume(String prenume) {
		this.prenume = prenume;
	}
	public String getData_nastere() {
		return data_nastere;
	}
	public void setData_nastere(String data_nastere) {
		this.data_nastere = data_nastere;
	}
	public String getAdresa() {
		return adresa;
	}
	public void setAdresa(String adresa) {
		this.adresa = adresa;
	}
	public String getIstoric() {
		return istoric;
	}
	public void setIstoric(String istoric) {
		this.istoric = istoric;
	}

}
