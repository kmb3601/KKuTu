/*!
 * Rule the words! KKuTu Online
 * Copyright (C) 2020  JJoriping(op@jjo.kr)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import Express = require("express");

/**
 * 익스프레스 인스턴스에 추가할 수 있는 라우팅 객체를 만들어 반환한다.
 */
export function route():Express.Router{
  const R = Express.Router();

  R.get("/", (req, res) => {
    page(req, res, "Index");
  });

  return R;
}
function page(req:Express.Request, res:Express.Response, name:string):void{
  res.render(name, {
    page: name,
    L: {}
  });
}
