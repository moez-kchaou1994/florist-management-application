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
@XmlRootElement(name="Client")
public class Client {
    int num_client;
    String nom_client;
    String password_c;

    public Client(int num_client, String nom_client, String password_c) {
        this.num_client = num_client;
        this.nom_client = nom_client;
        this.password_c = password_c;
    }
   
   
    public Client() {
       this.password_c = "";
        this.num_client=0;
        this.nom_client="";   
    }

    public int getNum_client() {
        return num_client;
    }

    public String getNom_client() {
        return nom_client;
    }

    

    public void setNum_client(int num_client) {
        this.num_client = num_client;
    }

    public void setNom_client(String nom_client) {
        this.nom_client = nom_client;
    }

    public String getPassword_c() {
        return password_c;
    }

    public void setPassword_c(String password_c) {
        this.password_c = password_c;
    }

    
    
}

