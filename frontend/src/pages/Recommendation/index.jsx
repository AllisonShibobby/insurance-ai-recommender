import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Recommendation = () => {
  const location = useLocation();
  const userData = location.state?.formData || {};
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const res = await axios.post('http://localhost:8000/recommend', userData);
        setRecommendations(res.data.recommendations || []);
      } catch (err) {
        console.error('推荐请求失败:', err);
      }
    };

    if (Object.keys(userData).length > 0) {
      fetchRecommendations();
    }
  }, [userData]);

  return (
    <div>
      <h2>推荐结果</h2>
      {recommendations.length > 0 ? (
        <ul>
          {recommendations.map((rec, index) => (
            <li key={index}>{rec}</li>
          ))}
        </ul>
      ) : (
        <p>暂无推荐结果</p>
      )}
    </div>
  );
};

export default Recommendation;
