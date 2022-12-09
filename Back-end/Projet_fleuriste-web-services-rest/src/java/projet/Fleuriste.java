/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package projet;

import java.util.List;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author computer
 */
@XmlRootElement(name="Fleuriste")
public class Fleuriste {
    int num_fleuriste;
    String password_f;
    String nom_fleuriste;
    String prenom_fleuriste;

    public Fleuriste(int num_fleuriste, String password_f, String nom_fleuriste, String prenom_fleuriste) {
        this.num_fleuriste = num_fleuriste;
        this.password_f = password_f;
        this.nom_fleuriste = nom_fleuriste;
        this.prenom_fleuriste = prenom_fleuriste;
    }
    

   
    public Fleuriste() {
       
        this.num_fleuriste=0;
        this.nom_fleuriste="";
        this.prenom_fleuriste="";
 
        this.password_f = "";
    }

    public int getNum_fleuriste() {
        return num_fleuriste;
    }

    public String getNom_fleuriste() {
        return nom_fleuriste;
    }

    public String getPrenom_fleuriste() {
        return prenom_fleuriste;
    }

   
    public void setNum_fleuriste(int num_fleuriste) {
        this.num_fleuriste = num_fleuriste;
    }

    public void setNom_fleuriste(String nom_fleuriste) {
        this.nom_fleuriste = nom_fleuriste;
    }

    public void setPrenom_fleuriste(String prenom_fleuriste) {
        this.prenom_fleuriste = prenom_fleuriste;
    }

    public String getPassword_f() {
        return password_f;
    }

    public void setPassword_f(String password_f) {
        this.password_f = password_f;
    }

   
     
   
}
