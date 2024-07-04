-- Advanced Question
-- Show and compute average weighted score
DELIMITER //

CREATE PROCEDURE ComputeAverageWeightedScoreForUser(IN user_id INT)
BEGIN
    DECLARE sum_weighted_scores FLOAT;
    DECLARE total_weight FLOAT;

    -- Compute the sum of (score * weight) and total weight
    SELECT SUM(c.score * p.weight), SUM(p.weight)
    INTO sum_weighted_scores, total_weight
    FROM corrections c
    INNER JOIN projects p ON c.project_id = p.id
    WHERE c.user_id = user_id;

    -- Compute the average weighted score
    DECLARE avg_weighted_score FLOAT DEFAULT 0;
    IF total_weight > 0 THEN
        SET avg_weighted_score = sum_weighted_scores / total_weight;
    END IF;

    -- Update the user's average score
    UPDATE users
    SET average_score = avg_weighted_score
    WHERE id = user_id;
END //

DELIMITER ;
