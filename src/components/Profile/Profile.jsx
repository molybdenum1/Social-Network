import React from 'react';
import MyPost from './MyPosts/MyPost';
import './Profile.css';

export default function Profile() {
  return (
    <div className='content'>
      <h2>Main content</h2>
        <div>
          <img src="https://static.posters.cz/image/1300/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82%D0%B8/sunset-i5148.jpg"  height="100px"width="1080px"/>
        </div>
        <div>
          <h2>MY PROFILE</h2>
          <div>
            <img width="40px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8uO04hMUaPlJsSJj4MIzzk5efp6uzZ290rOExBTF0/SlwjNEkeLkQpN0uEipMFIDoZKkEAGzean6bS1Nejp660uL3g4eRmbnoQJT6+wcbz9PWWm6JAS113foiytruprbN/hY9YYG7KzdA2QlVNV2aBh5E1xlffAAAD8klEQVR4nO3dj1baMBTHcRpaIEDbBApYYBVEff9HHMyx42Ga1HNzkyv+Pg/g/K7YfwnJYAAAAAAAAAAAAAAAAACQ0K5Zr5bDuJardbOLk9fUM5OXZaniOv+LuZnWDXfeaFjlSmepaJXr4Ziz78EkzLtGmo6tcW/mifPezIslS99mVqZO+8dOR+EDD4sqddc7lVmHDqyL1FE3zDBsYJenLvpPXocMrG3qng+0Ac83B2kf0Tfh/hYni9QtnzChzqhZ6qv8Z6ppmMBaznXwlg3yp7gxqTscihCPGw8ybtU+po70QNGH8HzJoB/ETqWOcCr35EKJ1/p3dEYN3AovzFrqU38n+TxzQf6Yir3aX1VPtMCx7DPpRU4rPMl7arpVbEiFB7l3bFf2RCrcy74aXthHUuFQfmG5uvdCRXthg8IzXdq24NHa0n855i7U+Wx5Go15jJrls/U1MhdWekv6+X7ruedNNG9hNeMf0ttl7kTWQl3FGLMcu/+XWQtz7o/om4PzCY6zUM8CJfho19mGs5B4N9Ff7fotOAst+6D6X84XDZyFLcMw5Yca1zMcZ2ERq3CCQgIUxoFCChTGgUIKFMaBQgoUxoFCChTGgUIKFMaBQgoUuo33L7+mPr9evN+CEVvYFGWl/arSeCYbSC0ct31nG+nCfRSlFu77z1RR7m8WSC186v8lG8+EbamFs/5T4rS++0L3LFEUohCFKEQhClGIQhSiEIUoRCEKUYhCFKIQhShEIQpRiEIUohCFKLynwu85BvzSfxxff89x/OHdz8UYm94f04X7J0ktHJz6rTqs1cLzjWmxhYNxnc39slffz5FbGAoKKVAYBwopUBgHCilQGAcKKVAYBwopUBgHCilQGAcKKX54YU5bZ7q/ZOu15bR1pvtLtuZeybP92Rd/C6x96eFev9Te+/qlmVacuy1ejdxjWMzrCGf8iaO5e3iHey1oRVvV3u/gW+6afcVyW9XbZsKj2dbKO8waYU12ZXMutsei91hX/8cXfoMdPBRts6CV/F1YiGtur6VvaEW+sXI+t8iQ01YV38nf78kQdy/4wuS0NDwTxvxepZ9MPRPG/MRv2tWSXzQIP4Z6Tg1077yQHvGO5mIk+2zqWSWsF9l7yXb0QNkHMcQhFL2nc4CdZP94lnrVD7Uv96CRurf6ItiwwqpN3fKhIuBbsKPEh6icfil8p5OX2FJvSG+8FqmLbpigR/BitZB0RtULhjfRjZZzh1o+T8IHnp/3j0bGDdw8/Cf0avMgoFGZjnM4aNNZ6xkL4qSVVTX3/Ijd9jgzeVmq2Eqbm2kdaerA7vS4HMa2Wjcx9gQFAAAAAAAAAAAAAAAA+NRvovJ5Ux1Yba4AAAAASUVORK5CYII="/>
          </div>
          <div>
            <h3>About</h3>
            <p>NAME</p>
            <p>EMAIL</p>
            <p>DESC</p>
          </div>
        </div>
        <MyPost/>
        
    </div>
  )
}
