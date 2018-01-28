
import React, { Component } from 'react';
import {ImageBackground , StyleSheet ,TextInput ,Keyboard ,NetInfo,Alert ,Navigator,TouchableHighlight,Image
} from 'react-native';

import { Container, Header, Content, Item, Input ,Radio ,Text ,Button,ListItem,List,View} from 'native-base';
import DatePicker from 'react-native-datepicker';



export default class Home extends Component {
   openDialog(show) {
        this.setState({ showDialog: show })
    }
  static navigationOptions={
       
        header: {
      visible: false,
    }
};
  constructor(props){
    super(props);

    this.state = {
                      DOB:"",
                      name:'',
                      email:'',
                      pass:'',
                      mobile:'',
                      username:'',
                      city:'',
                      netInfo:false
          }


  }

static navigationOptions={
        header: null,    
};

submit=()=>{

  if(this.state.DOB=="" || this.state.name=="" || this.state.email=="" || this.state.pass=="" || this.state.city=="" || this.state.mobile=="" || this.state.username==""){
    alert("Please Fill in All the Fields");
  }else{
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    var Value = this.state.pass.length.toString() ;
    var Value1 = this.state.mobile.length.toString() ;
    if(reg.test(this.state.email) === false){
              alert( "Please Enter Valid Email");
    }else if(Value<=8){
            alert("Password length must be minimum 8 characters.... ")
    }else if(Value1!=10){
            alert("Please Enter Valid 10 Digit Mobile Number")
    }else{
    Keyboard.dismiss();
    const info = {
      username: this.state.username,
      pass:this.state.pass,
      name: this.state.name,
      email:this.state.email,
      
      mobile:this.state.mobile,
      DOB:this.state.DOB,
      city:this.state.city
    } ;
        fetch("https://hooks.zapier.com/hooks/catch/2832603/8vij37/", {method: "POST", body: JSON.stringify(info)})
        .then((response) => response.json())
        .then((responseData) => {

 Alert.alert(
  '         Congratulations !!',
  'You have been successfully Signed Up and Your Registeration Details are stored here \n https://docs.google.com/spreadsheets/d/1Lq32W2aWOUZpQRFFDmNpRQgZe-zm-UMeTn1ghYMC-Gs/edit?usp=sharing',
  [
    
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
  ],
  { cancelable: false }
)







        })
        .done();




  }
}
}
  render() {
    
    return (

      <View style={styles.container}>

      <ImageBackground source={require('./img/back.jpg')} style={styles.background}>
        
      <View style={styles.content}>
      <Container style={{flex:1,alignSelf:'center',marginTop:60,}}> 
        <Content >
      
        <Item rounded style={{width:300,backgroundColor: 'rgba(255, 255, 255, 0.5)',borderColor:'rgba(255, 255, 255, 0.5)'}}>
            <Input placeholder='Username'  onChangeText={(username) => this.setState({username})}   value={this.state.username}  />
          </Item>
            <Item rounded style={{marginTop:15,width:300,backgroundColor: 'rgba(255, 255, 255, 0.5)',borderColor:'rgba(255, 255, 255, 0.5)'}}>
            <Input type="password" placeholder='Password' secureTextEntry={true}  onChangeText={(pass) => this.setState({pass})} value={this.state.pass} 
       />
          </Item>
          <Item rounded style={{width:300,marginTop:15,backgroundColor: 'rgba(255, 255, 255, 0.5)',borderColor:'rgba(255, 255, 255, 0.5)'}}>
            <Input placeholder='Name'  onChangeText={(name) => this.setState({name})}   value={this.state.name}  />
          </Item>
          <Item rounded style={{marginTop:15,width:300,backgroundColor: 'rgba(255, 255, 255, 0.5)',borderColor:'rgba(255, 255, 255, 0.5)'}}>
            <Input placeholder='Email Address' keyBoardType="email-address"        onChangeText={(email) => this.setState({email})}
        value={this.state.email} 
        />
          </Item>
        
          <Item rounded style={{marginTop:15,width:300,backgroundColor: 'rgba(255, 255, 255, 0.5)',borderColor:'rgba(255, 255, 255, 0.5)'}}>
            <Input placeholder='Mobile Number'  keyboardType = 'phone-pad'  onChangeText={(mobile) => this.setState({mobile})}   value={this.state.mobile} 
        />
          </Item>
    

 

      <View >
           <DatePicker 
        style={{width: null,marginTop:15,backgroundColor: 'rgba(255, 255, 255, 0.5)',borderColor:'rgba(255, 255, 255, 0.5)',borderRadius:20,overflow: 'hidden'}}
        date={this.state.DOB}

        mode="date"
        placeholder="Birthday"
        androidMode="spinner"
        format="YYYY-MM-DD"
        minDate="1950-01-01"
        maxDate="2018-01-31"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'relative',
            left: 0,
            top: 2,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: -160,
            borderWidth: 0,
              borderBottomWidth: 1,
              alignItems:'center'
             

          },
          dateText:{
            textAlign: 'left',
            fontSize:17,
              color: 'black',


              
            },
             placeholderText: {
              textAlign: 'left',
                      fontSize: 18,
                      color: 'grey',
                                        }
          
        }}
        onDateChange={(DOB) => {this.setState({DOB: DOB})}}
      />  
      </View>
      

             <Item rounded style={{marginTop:15,width:300,backgroundColor: 'rgba(255, 255, 255, 0.5)',borderColor:'rgba(255, 255, 255, 0.5)'}}>
            <Input placeholder='City' onChangeText={(city) => this.setState({city})}   value={this.state.city} />
          </Item>
              
                <Button rounded style={{alignSelf:'center',marginTop:15}} onPress={this.submit}> 
                <Text>Sign Up
                </Text></Button>
               
        </Content>  
      </Container>
      </View>
      </ImageBackground>
     </View>
      
   
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    alignItems: 'center',
   
  },
  background: {
     flex:1,
     alignSelf:'stretch',
     width: null,
     justifyContent:'center',
     alignItems:'center'

  },
  content:{
alignItems:'center',
  }
});


 





