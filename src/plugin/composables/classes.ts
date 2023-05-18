



export const useInlineFieldValueClass = (valueColor, error) => {
	return {
		[`text-${valueColor}`]: !error,
		'text-danger': error,
	};
};

