import { IconPicker } from '../components/Form/IconPicker';
import { TextField } from '../components/Form/TextField';
import { Button } from '../components/Button';
import { SelectField } from '../components/Form/SelectField';
import React from 'react';
import * as GithubIcons from 'react-icons/go';

import { useSelector, useDispatch } from 'react-redux';

import { useEffect, useState } from 'react';
import { SketchPicker } from 'react-color';

const Home = () => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [form, setForm] = useState({ color: '#757575' });

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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);
  };

  return (
    <form
      className="bg-white mt-10 rounded-lg p-10 shadow-2xl shadow-orange-500"
      onSubmit={handleSubmit}
    >
      <div className="flex">
        <div className="w-1/2 mr-3">
          <TextField
            placeholder=":user"
            label="Username"
            value={form.username}
            onChange={({ target }) =>
              setForm({ ...form, username: target.value })
            }
          />
        </div>

        <div className="w-1/2">
          <SelectField
            label="Repository"
            options={['Anan', 'baban', 'bacin']}
            value={form.repo}
            onChange={({ target }) => setForm({ ...form, repo: target.value })}
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
              >
                <Tag color="gray" />
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

        <Button type="submit">Create the card</Button>
      </div>
    </form>
  );
};

export default Home;
