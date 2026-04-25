import { NavLink, NavLinkProps } from 'react-router-dom'
import styles from './NavButton.module.scss'

interface Props extends NavLinkProps {
  className?: string,
  type?: "black" | "white" | "olive",
  onClick?: () => void;
  children: React.ReactNode;
}

const NavButton = ({ className, type="black", children, ...props }: Props) => {
  const combinedClasses = `${styles.button} ${styles[type]} ${className}`.trim();
  return (
    <NavLink
      {...props}
      className={combinedClasses}
    >
      {children}
    </NavLink>
  )
}

export default NavButton