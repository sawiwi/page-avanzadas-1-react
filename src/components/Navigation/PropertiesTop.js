import React, { useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { iconsList } from '../Icons';
import { paginationTopLimit } from '../../constants/consts/company';
import { PropertiesContext } from '../../context/properties/PropertiesContext';

const PropertiesTop = ({
  totalItems,
  isGrid,
  setIsGrid,
  isList,
  setIsList,
  properties,
}) => {
  const { contextData } = useContext(PropertiesContext);
  const { sortOrder, handleSortChange } = contextData;
  const { pathname } = useLocation();
  const { BsFillGridFill, FaThList, FaMapMarkerAlt } = iconsList;

  const getTitle = (pathname) => {
    switch (pathname) {
      case '/propiedades':
        return 'Propiedades';
      default:
        return 'Unne';
    }
  };

  useEffect(() => {
    document.title = getTitle(pathname);
  }, [pathname]);

  return (
    <div className=" py-5 px-3 border mb-4 bg-secondary w-full">
        <div className="flex justify-start items-center">
          <span className='border-l-4 border-primary h-8 mr-2'>
          </span>
            <h1 className="text-2xl xl:text-4xl font-ligth  text-primary-700">
              {getTitle(pathname)}
            </h1>
      
         
        </div>
      <div className="flex justify-between items-center my-4">
      <div className="flex flex-wrap flex-row justify-center xl:justify-start items-center bg-secondary text-primary">
        <small className="text-sm p-1 rounded">
          Total Propiedades: {totalItems ?? 0}
        </small>
        <span className="text-gray-300 mx-3">|</span>
        <small className="text-sm p-1 rounded">
          Por página: {paginationTopLimit.limit ?? 0}
        </small>
      </div>
        <div>
          <ul className="flex">
            <li className="w-[200px] sm:flex hidden mr-5 text-secondary-700">
              <select
                value={sortOrder}
                onChange={handleSortChange}
                className="px-2 py-1 border outline-none rounded-full focus:outline-none bg-white border-gray-200 w-[100%]"
              >
                <option value="">Ordenar por:</option>
                <option value="asc">Menor precio</option>
                <option value="desc">Mayor precio</option>
              </select>
            </li>

            <li
              onClick={() => {
                setIsGrid(true);
                setIsList(false);
              }}
              className={`${
                isGrid ? 'bg-primary text-secondary rounded-full' : 'bg-primary-opacity text-secondary rounded-full'
              } mx-1 p-2.5 cursor-pointer `}
            >
              <BsFillGridFill />
            </li>
            <li
              onClick={() => {
                setIsList(true);
                setIsGrid(false);
              }}
              className={`${
                isList
                  ? 'bg-primary text-secondary rounded-full'
                  : 'bg-primary-opacity hover:bg-primary duration-300 cursor-pointer text-secondary-700 rounded-full'
              } mx-1 p-2.5 cursor-pointer`}
            >
              <FaThList />
            </li>
            <li className="mx-1 p-2.5 bg-primary-opacity hover:bg-primary duration-300 rounded-full cursor-pointer text-secondary-700">
              <Link to="/propiedades/propiedades-en-mapa">
                <FaMapMarkerAlt />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PropertiesTop;
