import PropTypes from 'prop-types';

export default function CasinoEffect({ count, className }) {
  return <span className={className}>{count}</span>;
}

CasinoEffect.propTypes = {
	count: PropTypes.string,
    className: PropTypes.string,
}
