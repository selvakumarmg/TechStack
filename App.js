import React,{} from 'react';
import { View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import  Header  from './src/components/header'
import LibraryList from './src/components/LibraryList'


const App =()=>{

  return(
    <Provider store={createStore(reducers)}>
    <View style={{flex:1}}>
    <Header titleText={'Tech Stack'}/>
    <LibraryList />
    </View>
    </Provider>
  );
};

export default App;