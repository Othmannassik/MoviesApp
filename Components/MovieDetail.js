import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { getImageFromApi } from '../API/TMDBApi';
import { StatusBar } from 'expo-status-bar';
import { Feather, Ionicons } from '@expo/vector-icons';

const {height,width}=Dimensions.get("screen");
const setHeight = (h) => (height/100) * h;
const setwidth = (w) => (width/100) * w;


const ItemSeparator = ({height, width}) => 
{
    return <View style={{ width, height }} />;   
};
ItemSeparator.defaultProps = 
{
    height: 0,
    width: 0,
};

export default class MovieDetail extends React.Component {

  _onBackPress = () => {
    this.props.onBackPress();
  };
  

  render() {
    const { film } = this.props;

    if (!film) {
      return (
        <View style={styles.container}>
          <Text style={styles.errorText}>Film not found</Text>
          <Button title="Retour" onPress={this._onBackPress} />
        </View>
      );
    }

    return (
      <>
<ScrollView>
<StatusBar style='dark'/>
<View style={styles.moviePosterImageContainer}>
  <Image
    style={styles.moviePosterImage}
    source={{ uri: getImageFromApi(film.poster_path) }}
  />
</View>
<View style={styles.headerContainer}>
  <TouchableOpacity 
    activeOpacity={0.5} 
    onPress={this._onBackPress}>
    <Feather name="chevron-left" size={35} color="#000"/>
  </TouchableOpacity>
</View>
<ItemSeparator height={setHeight(37)}/>
<View style={styles.movieTitleContainer}>
  <Text style={styles.movieTitle}>{film.title}</Text>
  <View style={styles.row}>
    <Ionicons name='heart' size={22} color={"#F13939"}/>
    <Text style={styles.ratingText}>{film.vote_average}</Text>
  </View>
  
</View>
<View style={styles.overViewContainer}>
  <Text style={styles.overViewTitle}>Description </Text>
  <Text style={styles.overViewText}>{film.overview}</Text>
</View>


  <Button style={styles.btn} title="Back" onPress={this._onBackPress} />

</ScrollView></>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#F5F7FA",

  },
  moviePosterImageContainer:{
    height:setHeight(35),
    width:setwidth(145),
    alignItems:'center',
    position:'absolute',
    left:setwidth((100-145)/2),
    top:0,
    borderBottomRightRadius:300,
    borderBottomLeftRadius:300,
    elevation:8

  },
  moviePosterImage:{
    borderBottomRightRadius:300,
    borderBottomLeftRadius:300,
    width:setwidth(70),
    height:setHeight(35)
  },
  LinearGradient:{
    width:setwidth(100),
    height:setHeight(6),
    position:'absolute',
    top:0,
    elevation:9
  },
  headerContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:20,
    position:'absolute',
    right:0,
    left:0,
    top:50,
    elevation:20
  },
  headerText:{
    color:"#FFF",
  },
  playButton:{
    position:'absolute',
    top:110,
    left:setwidth(50) -70/2,
    elevation:10
  },
  movieTitleContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:20,

  },
  movieTitle:{
    color:"#000",
    fontSize:18,
    width:setwidth(60)
  },
  ratingText:{
    marginLeft:5,
    color:"#000",
    fontSize:15
  },
  row:{
    flexDirection:'row',
    alignItems:'center'
  },
  row2:{
    flexDirection:'row',
    justifyContent:'center',
    paddingLeft:550,
    paddingStart:540
  },
  fav:{
    justifyContent:'center',
    alignItems:'center'
  },
  genreText:{
    color:"#969696",
    paddingHorizontal:20,
    paddingTop:5,
    fontSize:13,

  },
  genreText2:{
    color:'#0E122B',
    paddingBottom:7,
    paddingTop:5,
    fontSize:16,
    paddingVertical:5

  },
  overViewContainer:{
    backgroundColor:"#E5E5E5",
    paddingHorizontal:20,
    paddingVertical:10,
    marginVertical:10,
  },
  overViewTitle:{
    color:"#000",
    fontSize:18,
  },
  overViewText:{
    color:"#969696",
    paddingVertical:5,
    fontSize:13,
    textAlign:'justify'

  },
  castTitle:{
    marginLeft:20,
    color:"#000",
    fontSize:18
  },
  castSubMenuContainer:{
    marginLeft:20,
    flexDirection:'row',
    marginVertical:5
  },
  castSubMenuText:{
    marginRight:10,
    color:"#000",
    fontSize:13

  },
  extraListTitle:{
    marginLeft:20,
    color:"#000",
    fontSize:18,
    marginVertical:8

  },

});