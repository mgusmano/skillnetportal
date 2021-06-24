import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {Svg,G, Circle, Rect, Image, Text, Path} from 'react-native-svg';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {

  const getColor = ((start)=>{
    let d = new Date(start);
    var today = new Date();
    var timeinmilisec = d.getTime() - today.getTime();
    var diff = -(Math.ceil(timeinmilisec / (1000 * 60 * 60 * 24)))
    switch(true) {
      case (diff > 180):
        return 'red'
      case (diff > 160):
        return 'gold'
      default:
        return 'green'
    }
  })

  let d = new Date();
  let greendate = d.toLocaleDateString();
  d.setDate(d.getDate() - 180);
  var yellowdate = d.toLocaleDateString();
  d.setDate(d.getDate() - 300);
  var reddate = d.toLocaleDateString();

  var widgetData = {
    data: [
      {
        meta:{type:'skill',id:10},
        data:[
          {
            meta:{type:'student',id: 1,status:'ok',start:greendate,trainer:true},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
          {
            meta:{type:'student',id: 2,status:'ok',start:reddate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
          {
            meta:{type:'student',id: 3,status:'ok',start:reddate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 4,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 5,status:'ok',start:yellowdate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:0}],
          },
        ]
      },
      {
        meta:{type:'skill',id:20},
        data:[
          {
            meta:{type:'student',id: 1,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 2,status:'ok',start:yellowdate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
          {
            meta:{type:'student',id: 3,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 4,status:'ok',start:reddate,trainer:false},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 5,status:'empty',start:greendate,trainer:false},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
        ]
      },
    ]
  }

  //const [path, setPath] = useState([]);
  const [pieStrokeWidth, setPieStrokeWidth] = useState(null);
  //const [pieStrokeColor, setPieStrokeColor] = useState('green');
  //const [pieColor, setPieColor] = useState('green');
  const [pieFillOpacity, setPieFillOpacity] = useState(0.1);
  const [pieWidth, setPieWidth] = useState(null);
  const [pieHeight, setPieHeight] = useState(null);

  useEffect(() => {
    console.log('hi')

    var piesize = 50;
    var strokewidth = 1
    setPieWidth(piesize)
    setPieHeight(piesize)
    setPieStrokeWidth(strokewidth/piesize)

//https://medium.com/hackernoon/a-simple-pie-chart-in-svg-dbdd653b6936


},[])



  return (
    <SafeAreaView
      style={{
        flexDirection: "column",
        height: 800,
        padding: 20
      }}
    >

      <View style={{ backgroundColor: "blue", flex: .2 }}>
        <Text>Hello World!</Text>
      </View>


      <View style={{ backgroundColor: "white", flex: .7, paddingTop: 10, paddingLeft: 20}}>

        {widgetData.data.map((row,i)=>{
          return (
            <Svg key={i} width={'800px'} height={'60px'}>
            {row.data.map((col,i)=>{
              var color = getColor(col.meta.start)
              let translate = `translate(${i*60},0)`
              return (
                <G key={i} transform={translate}>
                {col.data.map((cell,i)=>{
                  let y = `translate(0,0)`
                  return (
                    <G key={i} transform={y}>
                      <Svg width={pieWidth} height={pieHeight} viewBox="-1 -1 2 2" style="transform: rotate(-0.25turn)">
                        <Path key="1" d="M0,0 L1, 0 L-0,-1 z" style={{fill:color,stroke:color,fillOpacity:pieFillOpacity,strokeWidth:pieStrokeWidth}}/>
                        <Path key="2" d="M0,0 L0, 1 L 1, 0 z" style={{fill:color,stroke:color,fillOpacity:pieFillOpacity,strokeWidth:pieStrokeWidth}}/>
                        <Path key="3" d="M0,0 L0, 1 L-1, 0 z" style={{fill:color,stroke:color,fillOpacity:pieFillOpacity,strokeWidth:pieStrokeWidth}}/>
                        <Path key="4" d="M0,0 L0,-1 L-1, 0 z" style={{fill:color,stroke:color,fillOpacity:pieFillOpacity,strokeWidth:pieStrokeWidth}}/>
                      </Svg>
                    </G>
                  )
                })}
                </G>
              )
            })}
            </Svg>
          )
        })}



      </View>


      <View style={{ backgroundColor: "blue", flex: .1 }}>
        <Text>Hello World!</Text>
      </View>

        {/* <Circle r="1" cx="0" cy="0" fill={pieFillColor} /> */}

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionMain: {
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor: 'yellow',
    flexDirection: 'column'
  },
});

export default App;
