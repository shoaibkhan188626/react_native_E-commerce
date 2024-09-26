import React, {useEffect} from 'react';
import {FlatList, ActivityIndicator, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Card, Text} from 'react-native-paper';
import {fetchProducts} from '../redux/actions/actions';
import FastImage from 'react-native-fast-image';

const ProductList = () => {
  const dispatch = useDispatch();
  const {loading, products, error} = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const renderItem = ({item}) => (
    <Card style={styles.card}>
      <Card.Content>
        {item.images && item.images.length > 0 && (
          <FastImage
            source={{uri: item.images[0]}}
            style={styles.image}
            resizeMode={FastImage.resizeMode.contain}
          />
        )}
        <Text style={styles.title}>{item.title}</Text>
        <Text>Price: ${item.price}</Text>
        <Text>{item.description}</Text>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()} // Ensure keys are unique
          numColumns={2} // Set the number of columns
          columnWrapperStyle={styles.row} // Style for each row
        />
      )}
      {error && <Text>Error fetching products: {error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    flex: 1,
    margin: 8, // Add some margin around cards
    borderRadius: 8, // Optional: rounded corners
  },
  image: {
    width: '100%', // Full width of the card
    height: 150, // Set a fixed height for the images
    borderRadius: 8, // Optional: rounded corners
    marginBottom: 8, // Space between the image and text
  },
  title: {
    fontWeight: 'bold', // Make the title bold
  },
  row: {
    justifyContent: 'space-between', // Space out columns evenly
  },
});

export default ProductList;
