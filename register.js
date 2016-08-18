

'use strict';


import React, { Component } from 'react';
import {
   AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Navigator,
   Picker,
  TouchableHighlight
} from 'react-native';


import DropDown, {
  Select,
  Option,
  OptionList,
} from 'react-native-selectme';




 class register extends Component {
 
	constructor(props){
		super(props);

		this.state = {
			
      email: "",
			password: "",
			password_confirmation: "",
      fname: "",
      lname: "",
      address1: "",
      address2: "",
       state:"",
        postalcode:"",
         country:"",
      services:"",
			errors: [],
		}
	}

   redirect(routeTitle){
    this.props.navigator.push({
      title: routeTitle
    })
   }
 
  _getOptionList() {
    return this.refs['OPTIONLIST'];
  }


  _service(province) {

  this.setState({
      ...this.state,
      services: province
    });
  }

  


   async onRegisterPressed(){

   /* try{
      let response = await fetch('',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          user: {
              name: this.state.name,
              email: this.state.email,
              password: this.state.password,
              password_confirmation: this.state.password_confirmation
            }
          
        })
      });*/
   /*   let res = await response.text();
      console.log("res is:" +res);

    }
     catch(errors){

     } 


*/
 console.log("res is:" );

       this.redirect('home');
       

     }
 



  render() {
     
     
  	return (

 

 	<View style={ styles.container }>
     



        <TextInput 
        onChangeText={(val) => this.setState({email: val})}
        style={styles.input} placeholder="Email"
        />

         <TextInput 
        onChangeText={(val) => this.setState({password: val})}
        style={styles.input} placeholder="Password"
        secureTextEntry={true}
        />

         <TextInput 
        onChangeText={(val) => this.setState({password_confirmation: val})}
        style={styles.input} placeholder="Confirm Password"
        secureTextEntry={true}
        />
                
         <TextInput 
        onChangeText={(val) => this.setState({fname: val})}
       style={styles.input} placeholder="FirstName"
        />

         
        <TextInput 
        onChangeText={(val) => this.setState({lname: val})}
       style={styles.input} placeholder="LastName"
        />
   
        <TextInput 
        onChangeText={(val) => this.setState({address1: val})}
       style={styles.input} placeholder="Address Residenceline1"
        />
        <TextInput 
        onChangeText={(val) => this.setState({address2: val})}
       style={styles.input} placeholder="Address Residenceline2"
        />
      
           






      
            <Select
            width={300}
            height={35}
             
            ref="SELECT1"
            optionListRef={this._getOptionList.bind(this)}
            defaultValue="Services ..."
            onSelect={this._service.bind(this)}>
            
            <Option>service provider</Option>
            <Option>Consumer</Option>
            
          </Select>

           <OptionList ref="OPTIONLIST"/>




      




      









      
        <TouchableHighlight style={styles.button} onPress={this.onRegisterPressed.bind(this)}>
         <Text style={styles.buttonText}>
           Register
           </Text>
          </TouchableHighlight>



         
          <Text>Selected Canadas province: {this.state.services}</Text>
        
      

          






















     
       
      </View>
   	);
   }
   

};


var styles = StyleSheet.create({
  container: {
    flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		
		padding: 10,
		paddingTop:10
  }, 

  input: {
        height: 30,
        marginTop: 10,
        padding: 4,
        fontSize: 10,
        borderWidth: 1,
        borderColor: '#4888EC'
	},



    
    button: {
		height: 30,
		backgroundColor: '#4888EC',
		alignSelf: 'stretch',
		marginTop: 10,
		justifyContent: 'center'
	},
	buttonText: {
		fontSize: 18,
		color: '#fff',
		alignSelf: 'center'
	},
	heading: {
		fontSize: 30,
	},
	error: {
		color: 'red',
		paddingTop: 10
	},
	loader: {
		marginTop: 20
	}


  });



module.exports = register; 




























