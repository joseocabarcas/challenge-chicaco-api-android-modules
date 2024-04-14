import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    padding: 16,
  },
  container: {
    flex: 1,
  },
  containerImage: {
    height: 350,
    overflow: 'hidden',
    borderRadius: 20,
    position: 'relative',
  },
  image: {
    height: 350,
  },
  circleButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.24)',
    height: 36,
    width: 36,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleBack: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  circleBookmark: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  shadow: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    paddingVertical: 12,
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  // items icon
  containerItems: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 10,
  },
  containerItemIcon: {
    flexDirection: 'row',
    flex: 1,
  },
  icon: {
    marginEnd: 10,
  },
  textIcon: {
    fontSize: 12,
  },
  textTitle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  // description
  containerSection: {
    paddingVertical: 10,
  },
  containerDesciption: {
    flex: 1,
  },
  labelDesciption: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  textDesciption: {
    color: '#858585',
    fontSize: 14,
  },
  // tags
  containerTags: {
    flexDirection: 'row',
    marginVertical: 12,
    gap: 8,
  },
  textTag: {
    fontSize: 12,
    color: '#ffffff',
  },
  tag: {
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  tagPrimary: {
    backgroundColor: '#4f42b5',
  },
  tagDanger: {
    backgroundColor: '#ff0505',
  },
  // hero
  containerHero: {},
  textHero: {
    color: '#FFFFFF',
    fontSize: 12,
  },
})
