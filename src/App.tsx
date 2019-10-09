import React from 'react';
import './App.css';
import { Modal } from './Modal'

const modalProps = {
  ariaLabel: 'Accessible Modal',
  triggerText: "This is a button to trigger the Modal",
}


const modalContent = (
  <div>
    <p>Hello world Lorem ipsum dolor sit amet, <a href="#1">first link</a> consectetur adipiscing elit. Phasellus sagittis erat ut ex bibendum consequat. Morbi luctus ex ex, at varius purus <a href="#2">second link</a> vehicula consectetur. Curabitur a sapien a augue consequat rhoncus. Suspendisse commodo ullamcorper nibh quis blandit. Etiam viverra neque quis mauris efficitur, lobortis aliquam ex pharetra. Nam et ante ex. Sed gravida gravida ligula, non blandit nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer consectetur efficitur tempor. Nunc sollicitudin felis congue facilisis faucibus. Mauris faucibus sit amet ante eleifend dapibus.</p>
  </div>
);

const App = () => {
  return (
    <main className="content">
      <p>I wished to have staid at Birmingham to-night, to have talked more with Mr. Hector; but my friend was impatient to reach his native city; so we drove on that stage in the dark, and were long pensive and silent. When we came within the focus of the Lichfield lamps, 'Now (said he,) we are getting out of a state of death.' We put up at the Three Crowns, not one of the great inns, but a good old fashioned one, which was kept by Mr. Wilkins, and was the very next house to that in which Johnson was born and brought up, and which was still his own property. We had a comfortable supper, and got into  <Modal {...modalProps}>{modalContent}</Modal> high spirits. I felt all my Toryism glow in this old capital of Staffordshire. I could have offered incense genio loci; and I indulged in libations of that ale, which Boniface, in The Beaux Stratagem, recommends with such an eloquent jollity.</p>

     

      <p>Next morning he introduced me to Mrs. Lucy Porter, his step-daughter. She was now an old maid, with much simplicity of manner. She had never been in London. Her brother, a Captain in the navy, had left her a fortune of ten thousand pounds; about a third of which she had laid out in building a stately house, and making a handsome garden, in an elevated situation in Lichfield. Johnson, when here by himself, used to live at her house. She reverenced him, and he had a parental tenderness for her.</p>
      <p>We then visited Mr. Peter Garrick, who had that morning received a letter from his brother David, announcing our coming to Lichfield. He was engaged to dinner, but asked us to tea, and to sleep at his house. Johnson, however, would not quit his old acquaintance Wilkins, of the Three Crowns. The family likeness of the Garricks was very striking; and Johnson thought that David's vivacity was not so peculiar to himself as was supposed. 'Sir, (said he,) I don't know but if Peter had cultivated all the arts of gaiety as much as David has done, he might have been as brisk and lively. Depend upon it, Sir, vivacity is much an art, and depends greatly on habit.' I believe there is a good deal of truth in this, notwithstanding a ludicrous story told me by a lady abroad, of a heavy German baron, who had lived much with the young English at Geneva, and was ambitious to be as lively as they; with which view, he, with assiduous exertion, was jumping over the tables and chairs in his lodgings; and when the people of the house ran in and asked, with surprize, what was the matter, he answered, 'Sh' apprens t'etre fif.'</p>
    </main>
  );
}

export default App;