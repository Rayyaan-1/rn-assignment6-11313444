import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.menuContainer}>
        <Image 
          source={require('./assets/Menu.png')} // Replace with your menu image path
          style={styles.menuImage}
        />
        {/* New logo image */}
        <Image 
          source={require('./assets/Logo.png')} // Replace with your new logo image path
          style={styles.newLogoImage}
        />
        {/* Search image next to the new logo */}
        <Image 
          source={require('./assets/Search.png')} // Replace with your search image path
          style={styles.searchImage}
        />
        <Image 
          source={require('./assets/shoppingBag.png')} // Replace with your shoppingBag image path
          style={styles.shoppingBagImage}
        />
      </View>
      <View style={styles.storyContainer}>
        <Text style={styles.storyText}>O U R  S T O R Y</Text>
        <Image 
          source={require('./assets/Listview.png')} // Replace with your Listview image path
          style={styles.listviewImage}
        />
        <Image 
          source={require('./assets/Filter.png')} // Replace with your Filter image path
          style={styles.filterImage}
        />
      </View>
      <View style={styles.imageContainer}>
        <View style={[styles.imageWrapper, styles.duplicatedImages]}>
          <Image 
            source={require('./assets/dress1.png')} // Replace with your dress1 image path
            style={styles.dressImage}
          />
          <Image 
            source={require('./assets/add.png')} // Replace with your add image path
            style={styles.addImage}
          />
          <Text style={styles.officeWearText}>Office Wear</Text>
          <Text style={styles.cardiganText}>reversible angora cardigan</Text>
          <Text style={styles.priceText}>$120</Text>
        </View>
        <View style={[styles.imageWrapper, styles.duplicatedImages]}>
          <Image 
            source={require('./assets/dress2.png')} // Replace with your dress2 image path
            style={styles.dressImage}
          />
          <Image 
            source={require('./assets/add.png')} // Replace with your add image path
            style={styles.addImage}
          />
          <Text style={styles.officeWearText}>Black</Text>
          <Text style={styles.cardiganText}>reversible angora cardigan</Text>
          <Text style={styles.priceText}>$120</Text>
        </View>
      </View>
      <View style={[styles.imageContainer, styles.duplicatedImages]}>
        <View style={[styles.imageWrapper, styles.duplicatedImages]}>
          <Image 
            source={require('./assets/dress3.png')} // Replace with your dress3 image path
            style={styles.dressImage}
          />
          <Image 
            source={require('./assets/add.png')} // Replace with your add image path
            style={styles.addImage}
          />
          <Text style={styles.officeWearText}>Church Wear</Text>
          <Text style={styles.cardiganText}>reversible angora cardigan</Text>
          <Text style={styles.priceText}>$120</Text>
        </View>
        <View style={[styles.imageWrapper, styles.duplicatedImages]}>
          <Image 
            source={require('./assets/dress4.png')} // Replace with your dress4 image path
            style={styles.dressImage}
          />
          <Image 
            source={require('./assets/add.png')} // Replace with your add image path
            style={styles.addImage}
          />
          <Text style={styles.officeWearText}>Lamerei</Text>
          <Text style={styles.cardiganText}>reversible angora cardigan</Text>
          <Text style={styles.priceText}>$120</Text>
        </View>
      </View>
      <View style={[styles.imageContainer, styles.duplicatedImages]}>
        <View style={[styles.imageWrapper, styles.duplicatedImages]}>
          <Image 
            source={require('./assets/dress5.png')} // Replace with your dress5 image path
            style={styles.dressImage}
          />
          <Image 
            source={require('./assets/add.png')} // Replace with your add image path
            style={styles.addImage}
          />
          <Text style={styles.officeWearText}>21WN</Text>
          <Text style={styles.cardiganText}>reversible angora cardigan</Text>
          <Text style={styles.priceText}>$120</Text>
        </View>
        <View style={[styles.imageWrapper, styles.duplicatedImages]}>
          <Image 
            source={require('./assets/dress6.png')} // Replace with your dress6 image path
            style={styles.dressImage}
          />
          <Image 
            source={require('./assets/add.png')} // Replace with your add image path
            style={styles.addImage}
          />
          <Text style={styles.officeWearText}>Lopo</Text>
          <Text style={styles.cardiganText}>reversible angora cardigan</Text>
          <Text style={styles.priceText}>$120</Text>
        </View>
      </View>
      <View style={[styles.imageContainer, styles.duplicatedImages]}>
        <View style={[styles.imageWrapper, styles.duplicatedImages]}>
          <Image 
            source={require('./assets/dress7.png')} // Replace with your dress7 image path
            style={styles.dressImage}
          />
          <Image 
            source={require('./assets/add.png')} // Replace with your add image path
            style={styles.addImage}
          />
          <Text style={styles.officeWearText}>21WN</Text>
          <Text style={styles.cardiganText}>reversible angora cardigan</Text>
          <Text style={styles.priceText}>$120</Text>
        </View>
        <View style={[styles.imageWrapper, styles.duplicatedImages]}>
          <Image 
            source={require('./assets/dress3.png')} // Replace with your dress8 image path
            style={styles.dressImage}
          />
          <Image 
            source={require('./assets/add.png')} // Replace with your add image path
            style={styles.addImage}
          />
          <Text style={styles.officeWearText}>Lame</Text>
          <Text style={styles.cardiganText}>reversible angora cardigan</Text>
          <Text style={styles.priceText}>$120</Text>
        </View>
      </View>
      {/* Add a spacer view */}
      <View style={styles.spacer} />
      {/* Add the centered Logo image */}
      <View style={styles.centeredLogoContainer}>
        <Image 
          source={require('./assets/Logo.png')} // Replace with your new Logo image path
          style={styles.centeredLogo}
        />
        {/* New Search image next to the new Logo */}
        <Image 
          source={require('./assets/Search.png')} // Replace with your search image path
          style={styles.searchImage}
        />
        {/* Checkout text */}
        <Text style={styles.checkoutText}>C H E C K O U T</Text>
      </View>

        <View style={[styles.imageWrapper, styles.duplicatedImages]}>
  <Image 
    source={require('./assets/dress1.png')} // Replace with your dress8 image path
    style={styles.dressImage}
  />
  <Text style={styles.officeWearText}>OFFICE WEAR </Text>
  <Text style={styles.cardiganText}>Office wear for your office </Text>
  <View style={styles.priceWrapper}>
    <Text style={styles.priceText}>$120</Text>
    <Image 
      source={require('./assets/remove.png')} // Replace with your add image path
      style={{
       marginBottom:-0.5,
        marginLeft: 'auto', // Move the image to the right
        marginRight: -50, // Add additional margin on the right side if needed
      }}
    />
  </View>

  
</View>
<View style={[styles.imageWrapper, styles.duplicatedImages]}>
  <Image 
    source={require('./assets/dress4.png')} // Replace with your dress8 image path
    style={styles.dressImage}
  />
  <Text style={styles.officeWearText}>LAMEREI </Text>
  <Text style={styles.cardiganText}>Recycle Boucle Knit Cardigan Pink </Text>
  <View style={styles.priceWrapper}>
    <Text style={styles.priceText}>$120</Text>
    <Image 
      source={require('./assets/remove.png')} // Replace with your add image path
      style={{
        marginBottom:-0.5,
         marginLeft: 'auto', // Move the image to the right
         marginRight: -50, // Add additional margin on the right side if needed
       }}
    />
  </View>
</View>
<View style={[styles.imageWrapper, styles.duplicatedImages]}>

  <Image 
    source={require('./assets/dress3.png')} // Replace with your dress8 image path
    style={styles.dressImage}
  />
  <Text style={styles.officeWearText}>CHURCH WEAR </Text>
  <Text style={styles.cardiganText}>Recycle Boucle Knit Cardigan Pink </Text>
  <View style={styles.priceWrapper}>
    <Text style={styles.priceText}>$120</Text>
    <Image 
      source={require('./assets/remove.png')} // Replace with your add image path
      style={{
        marginBottom:-0.5,
         marginLeft: 'auto', // Move the image to the right
         marginRight: -50, // Add additional margin on the right side if needed
       }}
    />
  </View>
</View>


    </ScrollView>



  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
  },
  menuContainer: {
    position: 'absolute',
    top: 44,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  newLogoImage: {
    width: 120,
    height: 50,
    marginLeft: 110,
  },
  searchImage: {
    width: 30,
    height: 30,
    marginLeft: 20, // Adjusted marginLeft for spacing
  },
  shoppingBagImage: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  storyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 80,
  },
  storyText: {
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#666',
    letterSpacing: 2,
    textShadowColor: '#666',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    textTransform: 'uppercase',
    fontFamily: 'Times New Roman',
    marginRight: 10,
  },
  listviewImage: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  filterImage: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    width: '45%', // Adjusted width to fit two images per row
    height: 250, // Increased height for larger images
    marginBottom: 20,
    marginTop: 20,
  },
  dressImage: {
    width: '100%',
    height: '100%',
  },
  addImage: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 30,
    height: 30,
  },
  officeWearText: {
    marginTop: 10,
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Aptos',
    fontSize: 16,
  },
  cardiganText: {
    textAlign: 'center',
    color: 'gray',
    fontFamily: 'Aptos',
    fontSize: 14,
  },
  priceText: {
    textAlign: 'center',
    color: 'orange',  // Set the color to orange
    fontFamily: 'Aptos',
    fontSize: 14,
  },
  duplicatedImages: {
    marginBottom: 40,
  },
  spacer: {
    height: 200, // Adjust the height to add more or less space
  },
  centeredLogoContainer: {
    flexDirection: 'row', // Changed to flexDirection: 'row' to align items horizontally
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20, // Adjust as needed for additional spacing
  },
  centeredLogo: {
    width: 120, // Adjust the width as needed
    height: 50, // Adjust the height as needed
  },
  checkoutText: {
    marginTop: 10,
    textAlign: 'center',
    color: 'black', // Set the color to black
    fontFamily: 'Aptos', // Set the font family to Aptos
    fontSize: 16,

    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        flexWrap: 'wrap',
      },

        imageWrapper: {
    position: 'relative',
    width: '45%', // Adjusted width to fit two images per row
    height: 250, // Increased height for larger images
    marginBottom: 20,
    marginTop: 20,
  },
  dressImage: {
    width: '100%',
    height: '100%',
  },

  
      
  },
});
