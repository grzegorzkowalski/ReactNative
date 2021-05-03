import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";

const API_URL =
  "https://restcountries.eu/rest/v2/alpha?codes=af;al;dz;as;ad;ao;ai;aq;ag;ar;am;aw;au;at;az;bs;bh;bd;bb;by;be;bz;bj;bm;bt;bo;bq;ba;bw;bv;br;io;bn;bg;bf;bi;cv;kh;cm;ca;ky;cf;td;cl;cn;cx;cc;co;km;cd;cg;ck;cr;hr;cu;cw;cy;cz;ci;dk;dj;dm;do;ec;eg;sv;gq;er;ee;sz;et;fk;fo;fj;fi;fr;gf;pf;tf;ga;gm;ge;de;gh;gi;gr;gl;gd;gp;gu;gt;gg;gn;gw;gy;ht;hm;va;hn;hk;hu;is;in;id;ir;iq;ie;im;il;it;jm;jp;je;jo;kz;ke;ki;kp;kr;kw;kg;la;lv;lb;ls;lr;ly;li;lt;lu;mo;mg;mw;my;mv;ml;mt;mh;mq;mr;mu;yt;mx;fm;md;mc;mn;me;ms;ma;mz;mm;na;nr;np;nl;nc;nz;ni;ne;ng;nu;nf;mp;no;om;pk;pw;ps;pa;pg;py;pe;ph;pn;pl;pt;pr;qa;mk;ro;ru;rw;re;bl;sh;kn;lc;mf;pm;vc;ws;sm;st;sa;sn;rs;sc;sl;sg;sx;sk;si;sb;so;za;gs;ss;es;lk;sd;sr;sj;se;ch;sy;tw;tj;tz;th;tl;tg;tk;to;tt;tn;tr;tm;tc;tv;ug;ua;ae;gb;um;us;uy;uz;vu;ve;vn;vg;vi;wf;eh;ye;zm;zw;ax";

export default function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const request = await fetch(API_URL);
        const data = await request.json();
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}></View>
      <StatusBar />
      {!countries.length ? (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          style={{ flex: 1, width: "100%" }}
          data={countries}
          renderItem={renderItem}
          keyExtractor={(item) => item.alpha2Code}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#36213E",
  },
  item: {
    alignSelf: "stretch",
    height: 52,
    flexDirection: "row",
    backgroundColor: "#36213E",
    color: 'white',
    alignSelf: "stretch",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    color: '#B8F3FF'
  },
  topBar: {
    alignSelf: "stretch",
    height: 52,
    flexDirection: "row",
    backgroundColor: "#8AC6D0",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
  },
});
