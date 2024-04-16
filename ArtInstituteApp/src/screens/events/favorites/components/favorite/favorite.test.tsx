/* eslint-disable */
import React from 'react'
import { render, screen } from '@testing-library/react-native'

import Favorite from './favorite'

const eventMock = {
  id: 5839,
  api_model: 'events',
  api_link: 'https://api.artic.edu/api/v1/events/5839',
  title: 'Performance: Nora Turatopool 611',
  title_display: 'Performance: Nora Turato—\u003Ci\u003Epool 6\u003C/i\u003E',
  image_url:
    'https://artic-web.imgix.net/1d81d024-7775-4131-b2d5-46fea8af6103/E38423-Press300ppi%2C3000px%2CsRGB%2CJPEG.jpg?rect=0%2C200%2C3000%2C1686&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Ccenter&w=1200&h=674',
  hero_caption:
    '\u003Cp\u003EInterior of Fullerton Hall, the Art Institute of Chicago, c. 1900.\u003C/p\u003E',
  short_description:
    '\u003Cp\u003EArtist Nora Turato explores the anxiety of self-optimization in a new monologue embodying a multitude of personas.\u003C/p\u003E',
  header_description: null,
  list_description:
    '\u003Cp\u003EArtist Nora Turato explores the anxiety of self-optimization in a new monologue embodying a multitude of personas.\u003C/p\u003E',
  description:
    '\u003Cp\u003EArtist Nora Turato explores the anxiety that permeates wellness and self-optimization in a new monologue,&nbsp;\u003Cem\u003Epool 6. \u003C/em\u003EDrawing from the vernacular of self-improvement, which has widely circulated online and&nbsp;seeped into daily life, \u003Cem\u003Epool 6 \u003C/em\u003Eexplores the relationship between perception and well-being.\u003C/p\u003E\u003Cp\u003EThe piece marks the first time Turato has incorporated multiple personas within a performance. By embodying these different voices, she taps into a stream of collective unconsciousness to reveal shared experiences of anxiety and insecurity. In preparation for the performance, the artist draws on her practice of vocal and gestural training sessions with voice coach Julie Adams. She also engages in neurofeedback, hypnosis, holotropic breathwork, and other therapeutic&nbsp;techniques.&nbsp;\u003Cem\u003E\u003Cspan id="docs-internal-guid-5085bf05-7fff-8830-4591-e10d580a4ca1" class="ql-anchor"\u003E\u003Cbr class="softbreak"\u003E\u003C/span\u003E\u003C/em\u003E\u003Cbr class="softbreak"\u003EPresented in the Art Institute of Chicago\'s Fullerton Hall, \u003Cem\u003Epool 6 \u003C/em\u003Eplaces itself in conversation with the unique history of the space, which visitors can learn more about \u003Ca href="/articles/710/sisters-and-brothers-of-america-swami-vivekananda-in-chicago" rel="noopener noreferrer"\u003Ehere\u003C/a\u003E.\u003C/p\u003E\u003Cp\u003E\u003Cem\u003Epool 6&nbsp;\u003C/em\u003Ewas commissioned by Performa for the&nbsp;Performa&nbsp;Biennial 2023, where it was originally titled "Cue the Sun."\u003C/p\u003E\u003Cp\u003EExperience more of Turato\'s work from the Chicago Riverwalk, nightly April 12–June 5, where her monumental video projection&nbsp;\u003Cem\u003ETHIS IS A TEST OF SEVERANCE: can you let go?&nbsp;\u003C/em\u003Ewill be on view as part of Art on the Mart.&nbsp;\u003C/p\u003E\u003Ch2\u003EAbout the Artist\u003C/h2\u003E\u003Cp\u003E\u003Cstrong\u003ENora Turato \u003C/strong\u003E(born 1991, Zagreb, Croatia) lives and works in Amsterdam. Recent solo exhibitions have been held at Spruth Magers, Berlin (2023); the Museum of Modern Art, New York (2022); 52 Walker/David Zwirner, New York (2022); Secession, Vienna (2021); MGLC: International Centre of Graphic Arts, Ljubljana (2020); Sammlung Philara, Düsseldorf (2020); Serralves Museum of Contemporary Art, Porto (2019); Kunstmuseum Liechtenstein, Vaduz (2019); and Beursschouwburg, Brussels (2019). Turato is an incisive observer of meaning—and its absence—in a linguistic era determined by the rapid pace of online life.\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EPlease note that this is an in-person event that takes place at the museum.\u003C/strong\u003E\u003C/p\u003E\u003Cp\u003EIn accordance with state and City of Chicago guidelines, visitors to the museum are no longer required to wear masks or provide proof of vaccination. Anyone who would like to continue to wear a mask is welcome to do so.&nbsp;\u003Ca href="/visit#expect" rel="noopener noreferrer"\u003ELearn more\u003C/a\u003E&nbsp;about our visiting policies and what to expect.\u003C/p\u003E\u003Cp\u003EIf you have any questions about programming, please reach out to&nbsp;\u003Ca href="mailto:museum-programs@artic.edu" rel="noopener noreferrer"\u003Emuseum-programs@artic.edu\u003C/a\u003E.\u003C/p\u003E\u003Cp\u003EFor questions related to accessibility accommodations, please email&nbsp;\u003Ca href="mailto:access@artic.edu" rel="noopener noreferrer"\u003Eaccess@artic.edu\u003C/a\u003E.\u003C/p\u003E',
  location: 'Fullerton Hall',
  event_type_id: 4,
  alt_event_type_ids: [],
  audience_id: 3,
  alt_audience_ids: [],
  program_ids: [11, 71, 96, 65],
  program_titles: ['Lectures', 'Public Programs', 'Magazine', 'Artist Talk'],
  is_ticketed: true,
  ticketed_event_id: 27724,
  rsvp_link: 'https://sales.artic.edu/Events/Event/27724?date=4/13/2024',
  buy_button_text: 'Register',
  buy_button_caption:
    '\u003Cp\u003EFree, registration required\u003C/p\u003E\u003Cp\u003ERegistration link available soon\u003C/p\u003E',
  is_registration_required: true,
  is_member_exclusive: false,
  is_sold_out: false,
  is_free: true,
  is_private: false,
  is_admission_required: true,
  is_after_hours: false,
  is_virtual_event: false,
  virtual_event_url: null,
  virtual_event_passcode: null,
  start_date: '2024-04-13T00:00:00-05:00',
  end_date: '2024-04-13T00:00:00-05:00',
  start_time: '14:00',
  end_time: '15:00',
  date_display: 'Sat, Apr 13 | 2:00–3:00',
  door_time: null,
  layout_type: 0,
  slug: 'performance-nora-turato-pool-6',
  entrance: 'Michigan Avenue',
  join_url: null,
  survey_url: null,
  event_host_id: null,
  event_host_title: null,
  search_tags: null,
  source_updated_at: '2024-02-21T16:57:35-06:00',
  updated_at: '2024-04-12T15:20:11-05:00',
  timestamp: '2024-04-12T15:24:19-05:00',
}

describe('Favorite item', () => {
  test('Render success', () => {
    render(<Favorite event={eventMock} />)
    const titleText = screen.getByText(eventMock.title)
    expect(titleText).toBeVisible()
  })
})
