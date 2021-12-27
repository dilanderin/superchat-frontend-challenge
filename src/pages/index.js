import { IconPicker } from '../components/Form/IconPicker';
import { TextField } from '../components/Form/TextField';
import { Button } from '../components/Button';
import React from 'react';
import * as GithubIcons from 'react-icons/go';
import { useRouter } from 'next/router';

import { useSelector, useDispatch } from 'react-redux';

import { useEffect, useState } from 'react';
import { SketchPicker } from 'react-color';
import { loadRepos } from '../store/repository/actions';
import CryptoJS from 'crypto-js';

const Home = () => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [doesExists, setDoesExists] = useState(true);
  const [form, setForm] = useState({
    color: '#a52a2a',
    username: '',
    repo: '',
    icon: 'GoOctoface',
  });
  const router = useRouter();

  const iconList = [
    'GoOctoface',
    'GoMarkGithub',
    'GoThumbsup',
    'GoFlame',
    'GoGist',
    'GoHeart',
    'GoStar',
    'GoPin',
  ];

  const dispatch = useDispatch();

  const {
    repository: { repoList, error, loading },
  } = useSelector(({ repository }) => ({ repository }));

  useEffect(() => {
    if (
      repoList?.length > 0 &&
      repoList?.some(({ name }) => name === form.repo)
    ) {
      setDoesExists(true);
      const encryptedUrl = CryptoJS.AES.encrypt(
        JSON.stringify(form),
        'superchat-frontend-challenge',
      ).toString();

      router.push({
        pathname: '/repo/[val]',
        query: { val: encryptedUrl },
      });
    } else if (
      repoList?.length > 0 &&
      !repoList?.some(({ name }) => name === form.repo)
    ) {
      setDoesExists(false);
    }
  }, [repoList]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loadRepos(form.username));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <div className="w-1/2 mr-3">
            <TextField
              placeholder="user"
              label="Username"
              name="username"
              required={true}
              value={form.username}
              onChange={({ target }) =>
                setForm({ ...form, username: target.value })
              }
            />
          </div>

          <div className="w-1/2">
            <TextField
              placeholder="repository"
              label="Repository"
              val="repo"
              required={true}
              value={form.repo}
              onChange={({ target }) =>
                setForm({ ...form, repo: target.value })
              }
            />
          </div>
        </div>

        <div className="mt-7">
          <div className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Icon
          </div>

          <div className="flex h-12">
            {iconList.map((item) => {
              const Tag = GithubIcons[item];
              return (
                <IconPicker
                  key={item}
                  onClick={({ target }) =>
                    setForm({ ...form, icon: target.value })
                  }
                  value={item}
                  active={form.icon === item ? true : false}
                >
                  <Tag color={form.icon === item ? 'white' : 'gray'} />
                </IconPicker>
              );
            })}
          </div>
        </div>

        <div className="mt-7 cursor-pointer">
          <div className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Color
          </div>

          <div
            className="w-full h-7"
            style={{ backgroundColor: form.color }}
            onClick={() => setDisplayColorPicker(!displayColorPicker)}
          ></div>

          {displayColorPicker ? (
            <>
              <div
                className="fixed inset-0"
                onClick={() => setDisplayColorPicker(false)}
              ></div>
              <div className="absolute">
                <SketchPicker
                  color={form.color}
                  onChange={(color) => setForm({ ...form, color: color.hex })}
                />
              </div>
            </>
          ) : null}

          <Button type="submit" disabled={loading}>
            Create the card
          </Button>

          {!doesExists ? (
            <div
              class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mt-3"
              role="alert"
            >
              <strong class="font-bold">
                Username or repository does not exists
              </strong>
            </div>
          ) : null}
        </div>
      </form>
    </>
  );
};

export default Home;
