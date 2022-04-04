import React from 'react';     // general config antd
import ReactDOM from "react-dom";   
// import puppeteer from 'puppeteer'

import ReactTestRenderer from 'react-test-renderer';
import {render, cleanup} from '@testing-library/react'
import JobCard from '../jobCard';

afterEach(cleanup);
it('renders correctly', () => {
    const tree = ReactTestRenderer.create(<JobCard 
            id={1}
            title={"test"}
            isLike={true}
            changeLike={()=>{}}
            company={"test company"}
            cities={"test city"}
            from_url={"www.google.com"}
            apply_url={""}
            publish_time={1649027672}
            content={"test description"}
        />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });


describe('Login', () => {
  let browser
  let page

//   beforeAll(async () => {
//     browser = await puppeteer.launch({ args: ['--no-sandbox'] })
//   })

  beforeEach(async () => {
    page = await browser.newPage()
    await page.goto('http://localhost:8000/en/login', {
      waitUntil: 'networkidle2',
    })
  })

  afterEach(() => page.close())

  it('should login with failure', async () => {
    await page.waitFor(selector => !!document.querySelector('#username'), {
      timeout: 3000,
    })
    await page.type('#username', 'wrong_user')
    await page.type('#password', 'wrong_password')
    await page.click('button[type="button"]')
    await page.waitForSelector('.anticon-close-circle') // should display error
  })

  it('should login successfully', async () => {
    await page.waitForSelector('#username', { timeout: 3000 })
    await page.type('#username', 'admin')
    await page.type('#password', 'admin')
    await page.click('button[type="button"]')
    await page.waitForSelector('.ant-layout-footer')
    const text = await page.evaluate(() => document.body.innerHTML)
    expect(text).toContain('Ant Design Admin')
  })

  afterAll(() => browser.close())
})
