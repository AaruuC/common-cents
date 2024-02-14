import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/Lessons.css';

const Lessons = (props) => {
  const {
    login, username, setUsername, setLogin, logout
    } = props;
  const navigate = useNavigate();
  const { topic, subcategory } = useParams();
  console.log(topic);
  console.log(subcategory);
  const formattedTopic = topic.replace(/-/g, ' ').replace(/(?:-| |\b)(\w)/g, function(key) { return key.toUpperCase()});
  const formattedSubcategory = subcategory.replace(/-/g, ' ').replace(/(?:-| |\b)(\w)/g, function(key) { return key.toUpperCase()});
  const lessonList = [
    'Lesson 1',
    'Lesson 2',
    'Lesson 3',
  ];

  const lessonList2 = [
    'Lesson 1',
    'Lesson 2',
    'Lesson 3',
    'Lesson 4'];
    
    const renderLessonLinks = (level) => {
      const formattedLevel = level.toLowerCase().replace(/\s+/g, '-');
      return lessonList.map((lesson, index) => (
        <li key={index}>
          {/* <button className="button" onClick={() => navigate(`/lessons/${topic}/${formattedLevel}/${index + 1}`)}> */}
          <button className="button" onClick={() => navigate(`/mcq`)}>
            {`${lesson}`}
          </button>
          <h6>{" "}</h6>
        </li>
      ));
    };

    const renderLessonLinks2 = (level) => {
      const formattedLevel = level.toLowerCase().replace(/\s+/g, '-');
      return lessonList2.map((lesson, index) => (
        <li key={index}>
          {/* <button className="button" onClick={() => navigate(`/lessons/${topic}/${formattedLevel}/${index + 1}`)}> */}
          <button className="button" onClick={() => navigate(`/mcq`)}>
            {`${lesson}`}
          </button>
          <h6>{" "}</h6>
        </li>
      ));
    };

  return (
    <><Navbar setLogin={setLogin} login={login} setUsername={setUsername} username={sessionStorage.getItem('username')} logout = {logout}/><div>
          <div className="lessons-container">
      <h2>{formattedTopic}, {formattedSubcategory}</h2>
      <div className="lessons-wrapper">

      <div className="level-container">
        <h3>Level 1</h3>
        <ul>{renderLessonLinks('Level 1')}</ul>
      </div>
          
      <div className="level-container">
        <h3>Level 2</h3>
        <ul>{renderLessonLinks('Level 2')}</ul>
      </div>

      <div className="level-container">
        <h3>Level 3</h3>
        <ul>{renderLessonLinks2('Level 3')}</ul>
      </div>

      </div>
    </div>
      </div></>
  );
};

export default Lessons;