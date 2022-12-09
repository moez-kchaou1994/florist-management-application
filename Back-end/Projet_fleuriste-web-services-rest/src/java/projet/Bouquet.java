/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package projet;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author computer
 */
@XmlRootElement(name="Bouquet")
public class Bouquet {
    int num_bouquet;
    String form_bouquet;
    String nom_bouquet;
    double prix_b;
    int taille_bouquet;
    List<Fleure> fleures;
   // form Bouquet flou Bouquet rond Bouquet linéaire, étagé Bouquet en cascade, retombant

    public Bouquet(int num_bouquet, String form_bouquet, String nom_bouquet, double prix_b) {
        this.num_bouquet = num_bouquet;
        this.form_bouquet = form_bouquet;
        this.nom_bouquet = nom_bouquet;
        this.prix_b = prix_b;
        this.fleures= new ArrayList<>();
    }
   
   
    public Bouquet() {
       
        this.num_bouquet=0;
        this.form_bouquet=""; 
        this.nom_bouquet = "";
        this.prix_b = 0.0;
        this.fleures= new ArrayList<>();
    }

    public int getNum_bouquet() {
        return num_bouquet;
    }

    public void setNum_bouquet(int num_bouquet) {
        this.num_bouquet = num_bouquet;
    }

    public String getForm_bouquet() {
        return form_bouquet;
    }

    public void setForm_bouquet(String form_bouquet) {
        this.form_bouquet = form_bouquet;
    }

    public String getNom_bouquet() {
        return nom_bouquet;
    }

    public double getPrix_b() {
        return prix_b;
    }

    public int getTaille_bouquet() {
        return fleures.size();
    }

    public List<Fleure> getFleures() {
        return fleures;
    }

    public void setNom_bouquet(String nom_bouquet) {
        this.nom_bouquet = nom_bouquet;
    }

    public void setPrix_b(double prix_b) {
        this.prix_b = prix_b;
    }
     
   
}

