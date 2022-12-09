/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package projet;

import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author computer
 */
@XmlRootElement(name="Fleure")
public class Fleure {
    int num_fleure;
    String couleur_fleure;
    String type_fleure;
     // type Dressée,Montante,Couchée,Volubile,Grimpante
    String nom_fleure;
    double prix_f;

    public Fleure(int num_fleure, String couleur_fleure, String type_fleure, String nom_fleure, double prix_f) {
        this.num_fleure = num_fleure;
        this.couleur_fleure = couleur_fleure;
        this.type_fleure = type_fleure;
        this.nom_fleure = nom_fleure;
        this.prix_f = prix_f;
    }
    
   
   
    public Fleure() {
       
        this.num_fleure=0;
        this.couleur_fleure="";
        this.type_fleure="";
         this.nom_fleure = "";
        this.prix_f = 0.0;
    }

    public int getNum_fleure() {
        return num_fleure;
    }

    public String getCouleur_fleure() {
        return couleur_fleure;
    }

    public String getType_fleure() {
        return type_fleure;
    }

    public void setNum_fleure(int num_fleure) {
        this.num_fleure = num_fleure;
    }

    public void setCouleur_fleure(String couleur_fleure) {
        this.couleur_fleure = couleur_fleure;
    }

    public void setType_fleure(String type_fleure) {
        this.type_fleure = type_fleure;
    }

    public String getNom_fleure() {
        return nom_fleure;
    }

    public void setNom_fleure(String nom_fleure) {
        this.nom_fleure = nom_fleure;
    }

    public double getPrix_f() {
        return prix_f;
    }

    public void setPrix_f(double prix_f) {
        this.prix_f = prix_f;
    }
    
}
