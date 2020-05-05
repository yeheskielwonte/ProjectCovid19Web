import React from "react";
import styles from "./Display.module.css";
import { TouchableOpacity } from 'react-native';

const Display = ({ data: { confirmed, recovered, deaths }, country }) => {
  if (!confirmed) {
    return "";
  }

  return (
    <div className={styles.container}>
      <br />
      <h2>{country ? `Negara: ${country}` : `Global`}</h2>
      <TouchableOpacity>
      <div style={{backgroundColor: 'orange',marginLeft:250,marginRight:750,marginBottom:20,borderWidth:1 , borderRadius:50}}>
        <h5 style={{textAlign:'center'}}>Positif</h5>
        <h5 style={{textAlign:'center'}}>{confirmed.value}</h5>
      </div>
      </TouchableOpacity>
      <TouchableOpacity>
      <div style={{backgroundColor: 'red',marginLeft:350,marginRight:650,marginBottom:20,borderWidth:1 , borderRadius:50}}>
        <h5 style={{textAlign:'center'}}>Meninggal</h5>
        <h5 style={{textAlign:'center'}}>{deaths.value}</h5>
      </div>
      </TouchableOpacity>
      <TouchableOpacity>
      <div style={{backgroundColor: 'green',marginLeft:450,marginRight:550,marginBottom:20,borderWidth:1 , borderRadius:50, alignItems:'right'}}>
        <h5 style={{textAlign:'center'}}>Sembuh</h5>
        <h5 style={{textAlign:'center'}}>{recovered.value}</h5>
      </div>
      </TouchableOpacity>
    </div>
  );
};

export default Display;
