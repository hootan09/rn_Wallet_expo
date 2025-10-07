import { Colors, Fonts } from "@/constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { ReduceMotion, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";
import { SafeAreaView } from 'react-native-safe-area-context';

const Welcome = () => {
  const router = useRouter();
  const sv = useSharedValue<number>(0);

  useEffect(() => {
    sv.value = withRepeat(
      // withDelay(
      // 100,
      withTiming(50, { duration: 3000 }),
      // ),
      -1,   // infinite loop
      true,  // reverse on each iteration
      () => { },
      ReduceMotion.System,
    )
  }, [])


  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: sv.value
      },
    ],
  }));


  return (
    <LinearGradient
      style={styles.container}
      colors={Colors.light.primaryLinearGradient}
    >
      <SafeAreaView style={styles.safeAreaWrapper}>
        <Animated.View style={styles.viewWrapper}>
          <Animated.Image
            source={require('../assets/images/pngs/wallet_success.png')}
            style={[
              { width: 500, height: 500 }, // base styles
              animatedStyle,
            ]}
          />
          <View style={styles.contentWrapper}>
            <Text style={styles.titleText}>Welcome Aboard!</Text>
            <Text style={styles.subtitleText}>Your new digital wallet is ready! Dive into securing and exploring your financial future. Your crypto journey starts now.</Text>

            <TouchableOpacity style={styles.btnWrapper} onPress={() => router.navigate('/')}>
              <LinearGradient
                style={{ flexDirection: 'row', gap: 8, width: '100%', height: '100%', borderRadius: 12, justifyContent: 'center', alignItems: 'center' }}
                colors={Colors.light.secondaryLinearGradient}
              >
                <Text style={styles.btnText}>Continue to Wallet</Text>
              </LinearGradient>
            </TouchableOpacity>

          </View>

        </Animated.View>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  safeAreaWrapper: {
    flex: 1,
  },
  viewWrapper: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  contentWrapper: {
    flex: 1,
    marginTop: 40,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginHorizontal: 16,
  },
  titleText: {
    fontFamily: Fonts.rounded,
    fontSize: 32,
    lineHeight: 34,
    fontWeight: '800',
    color: Colors.light.white,
  },
  subtitleText: {
    fontFamily: Fonts.rounded,
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '400',
    color: Colors.light.white,
    opacity: 0.75,
    marginTop: 8,
  },
  btnWrapper: {
    // flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light.dark,
    borderRadius: 12,
    height: 45,
    marginTop: 20,
    flexDirection: 'row',
    gap: 8,
  },
  btnText: {
    fontFamily: Fonts.rounded,
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '600',
    color: Colors.light.white,
  },
})