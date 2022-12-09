/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package projet;

import java.util.ArrayList;
import java.util.List;
//
/**
 *
 * @author computer
 */
public class Commande {
    int num_com;
    int num_client;
    List<Fleure> fleures;
    List<Bouquet> bouquets;
     List<Client> clients;
    double total_c;
    boolean etat_c;

    public Commande(int num_com) {
        this.num_com = num_com;
        this.total_c=0.0;
        this.num_client = 0;
        this.fleures= new ArrayList<>();
         this.bouquets= new ArrayList<>();
         this.clients= new ArrayList<>();
         this.etat_c=false;
    }
    public Commande() {
        this.total_c=0.0;
        this.num_com = 0;
        this.num_client = 0;
        this.fleures= new ArrayList<>();
         this.bouquets= new ArrayList<>();
         this.clients= new ArrayList<>();
          this.etat_c=false;
    }
    

    public int getNum_com() {
        return num_com;
    }

    public void setNum_com(int num_com) {
        this.num_com = num_com;
    }

    public int getNum_client() {
        return num_client;
    }

    public void setNum_client(int num_client) {
        this.num_client = num_client;
    }

    public List<Fleure> getFleures() {
        return fleures;
    }
      public List<Client> getClients() {
        return DB.getlistclient();
    }

    public List<Bouquet> getBouquets() {
        return bouquets;
    }
    public double total(List<Fleure> fleures,List<Bouquet> bouquets)
    {
        double s1=0.0;
        double s2=0.0;
        for (int i=0 ;i<this.fleures.size();i++)
        {
            s1=s1+this.fleures.get(i).prix_f;
        }
        for (int i=0 ;i<this.bouquets.size();i++)
        {
            s2=s2+this.bouquets.get(i).prix_b;
        }
        return  s1+s2;
    }

    public double getTotal_c() {
        return total(this.fleures,this.bouquets);
    }

    public boolean isEtat_c() {
        return etat_c;
    }

    public void setEtat_c(boolean etat_c) {
        this.etat_c = etat_c;
    }
    
    
}
