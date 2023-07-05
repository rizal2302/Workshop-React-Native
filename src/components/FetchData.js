import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';

function FetchData() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  console.log('Data API ', data);
  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json'
    )
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.log('Error', error))
      .finally(() => setLoading(false));
  });
  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <Text style={{fontSize: 18, color: 'blue', textAlign: 'center'}}>
            {data.title}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: 'blue',
              textAlign: 'center',
              paddingBottom: 10
            }}
          >
            {data.description}
          </Text>
          <FlatList
            data={data.articles}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => <Text>{item.id + '. ' + item.title}</Text>}
          />
        </View>
      )}
    </View>
  );
}

export default FetchData;
