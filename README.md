# Challenge Art Institute of Chicago API

## Details UI implementation

### List events

- List events with inifinitive scroll
- Go to detail event
- Go to favorites
- Navigation shared transition (It doesn't work becacuse support is only for old arch)

<img src="https://github.com/joseocabarcas/challenge-chicaco-api-android-modules/assets/8315391/e72c3779-d03c-4296-9b26-48af1860ecb3" width="200" height="400">

### Detail event

- We have two buttons with two ways to add calendar (automatic (require a permission) or intent with calendar app)
- Add or Remove favorites
- Button more or less description text
- Button go back
- Local notification push (8 seconds delay, for testing, first time may failed becasuse we need request permission and may time off) when we added event to calendar

<img src="https://github.com/joseocabarcas/challenge-chicaco-api-android-modules/assets/8315391/b1820662-06b1-477c-afc1-06cb7d7475f4" width="200" height="400">

### Favorites events

- List favorites
- Remove favorite

<img src="https://github.com/joseocabarcas/challenge-chicaco-api-android-modules/assets/8315391/7aaf2f49-d15a-4519-a8b8-4d1b9111dff2" width="200" height="400">


## Turbo modules

- Project using turbo modules with hermes, fabric and new arch
- Turbo module implementation for android with kotlin
- Using Calendar provider instance
- 2 ways to add event to calendar
    * Automatic
    * Intent calendar app