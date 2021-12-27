import { Button } from '../../components/Button';
import * as GithubIcons from 'react-icons/go';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import CryptoJS from 'crypto-js';

import { loadRepoDetails } from '../../store/repository/actions';

const RepositoryCard = ({ val }) => {
  const dispatch = useDispatch();
  const [repoAttrs, setRepoAttrs] = useState();
  const [icon, setIcon] = useState();

  useEffect(() => {
    const bytes = CryptoJS.AES.decrypt(val, 'superchat-frontend-challenge');
    let encryptedDetails = bytes.toString(CryptoJS.enc.Utf8);
    encryptedDetails = JSON.parse(encryptedDetails);
    setRepoAttrs(encryptedDetails);

    const Tag = GithubIcons[encryptedDetails.icon];
    setIcon(<Tag color={encryptedDetails.color} size="3em" />);

    dispatch(loadRepoDetails(encryptedDetails.username, encryptedDetails.repo));
    document.body.style.backgroundColor = encryptedDetails.color;
  }, []);

  const {
    repository: {
      repoDetails: { contributors, details },
    },
  } = useSelector(({ repository }) => ({ repository }));

  return Object.keys(details).length > 0 && repoAttrs ? (
    <>
      <div className="absolute top-3 right-4">{icon}</div>
      <div className="flex flex-col">
        <div className="font-bold text-2xl text-amber-600">{details?.name}</div>
        <div className="text-sm mb-4">by {details?.owner?.login}</div>

        {details?.description ? (
          <p className="text-gray-700 text-base">{details?.description}</p>
        ) : null}
      </div>

      <div className="block uppercase tracking-wide text-gray-700 text-sm font-bold mt-6">
        <span className="text-amber-600">Number of stars:</span>{' '}
        {details?.stargazers_count}
      </div>

      {contributors.length > 0 ? (
        <div className="mt-6">
          <div className="text-amber-600 block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">
            Contributors:
          </div>
          {contributors.map((contributor, index) => (
            <span
              key={contributor.id}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {contributor.login}
            </span>
          ))}
        </div>
      ) : null}

      {details?.topics?.length > 0 ? (
        <div className="mt-6">
          <div className="text-amber-600 block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">
            Topics:
          </div>
          {details?.topics.map((topic, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{topic}
            </span>
          ))}
        </div>
      ) : null}

      <a
        className="w-fit bg-green-500 mt-10 hover:bg-green-400 text-white font-bold py-4 px-4 rounded flex items-center"
        href={details?.html_url}
        target="_blank"
      >
        <GithubIcons.GoStar className="mr-2" /> Star the repository
      </a>
    </>
  ) : (
    <div>Loading...</div>
  );
};

export const getServerSideProps = async ({ query: val }) => {
  return { props: val };
};

export default RepositoryCard;
