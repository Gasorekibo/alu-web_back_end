-- Advanced Question
DELIMITER //

CREATE PROCEDURE ComputeAverageWeightedScoreForUsers()
BEGIN
    DECLARE done INT DEFAULT FALSE;
    DECLARE user_id INT;
    DECLARE proj_id INT;
    DECLARE user_score FLOAT;
    DECLARE weighted_sum FLOAT;
    DECLARE total_weight INT;
    DECLARE avg_weighted_score FLOAT;
    
    DECLARE cur_users CURSOR FOR
        SELECT id
        FROM users;
    
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

    OPEN cur_users;
    
    user_loop: LOOP
        FETCH cur_users INTO user_id;
        IF done THEN
            LEAVE user_loop;
        END IF;
        
        SET weighted_sum = 0;
        SET total_weight = 0;
        
        DECLARE cur_projects CURSOR FOR
            SELECT project_id, score, weight
            FROM corrections
            JOIN projects ON corrections.project_id = projects.id
            WHERE corrections.user_id = user_id;
        
        DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;
        
        OPEN cur_projects;
        
        project_loop: LOOP
            FETCH cur_projects INTO proj_id, user_score, total_weight;
            IF done THEN
                LEAVE project_loop;
            END IF;
            
            SET weighted_sum = weighted_sum + (user_score * total_weight);
        END LOOP;
        
        CLOSE cur_projects;
        
        IF total_weight > 0 THEN
            SET avg_weighted_score = weighted_sum / total_weight;
        ELSE
            SET avg_weighted_score = 0; 
        END IF;
        
        UPDATE users
        SET average_score = avg_weighted_score
        WHERE id = user_id;
        
    END LOOP;
    
    CLOSE cur_users;
    
END//

DELIMITER ;
