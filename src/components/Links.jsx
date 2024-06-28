import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const Links = ({ href, style, icon, name }) => {
  return (
    <Link to={href} className={style}>
      <div className="hover:text-[#9fc5ef] flex items-center gap-1">
        {icon}
        {name}
      </div>
    </Link>
  );
};
